<template>
  <div class="image-collection">
    <div class="container" v-for="(image, index) in images" @click="onClickImage(index)">
      <div class="loading-wrapper" v-if="image.isLoading">
        <spinner class="spinner"/>
      </div>
      <img alt="image" :src="image.src"/>
    </div>
  </div>
  <ImageSliderView :images="imageSrcs"
                   :index="selectedImage"
                   v-if="selectedImage !== undefined"
                   @close="onCloseImageView"/>
</template>

<script lang="ts">

export class ImageContext {
  public isLoading = true

  constructor(
      public readonly src: string,
      public readonly promise: Promise<any>
  ) {}
}

import ImageSliderView from "@/views/ImageSliderView.vue";
import {defineComponent} from "vue";
import Spinner from "@/components/Spinner.vue";

export default defineComponent ({
  name: 'ImageCollection',
  components: {Spinner, ImageSliderView},
  props: [
      'images'
  ],
  data() {
    return {
      selectedImage: undefined as number | undefined
    }
  },
  computed: {
    imageSrcs() {
      return this.images.map((i: ImageContext) => i.src)
    }
  },
  methods: {
    onClickImage(idx: number) {
      this.selectedImage = idx
    },
    onCloseImageView(): void {
      this.selectedImage = undefined
    }
  },
  created() {
    this.$nextTick(() => {
      this.images.forEach((image: ImageContext) => {
        image.promise.then(() => {
          console.log('timeout')
          image.isLoading = false
        })
      })
    })
  }
})
</script>

<style lang="scss" scoped>

.image-collection {
  display: flex;
  height: 200px;
  overflow: auto;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .loading-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #181a21;
      opacity: 0.5;

      .spinner {
        width: 45px;
        height: 45px;
      }
    }

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