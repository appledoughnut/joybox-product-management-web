<template>
  <div class="image-collection">
    <div class="container" v-for="(image, index) in images" @click="onClickImage(index)">
      <img alt="image" :src="image"/>
    </div>
  </div>
  <ImageSliderView :images="images" :index="selectedImage" v-if="selectedImage !== undefined" @close="onCloseImageView"/>
</template>

<script lang="ts">
import ImageSliderView from "@/views/ImageSliderView.vue";
import {defineComponent} from "vue";
export default defineComponent ({
  name: 'ImageCollection',
  components: {ImageSliderView},
  props: [
      'images'
  ],
  data() {
    return {
      selectedImage: undefined as number | undefined
    }
  },
  methods: {
    onClickImage(idx: number) {
      this.selectedImage = idx
    },
    onCloseImageView(): void {
      this.selectedImage = undefined
    }
  }
})
</script>

<style lang="scss" scoped>

.image-collection {
  display: flex;
  height: 200px;
  overflow: auto;

  .container {
    img {
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      cursor: pointer;
    }
  }
}

</style>