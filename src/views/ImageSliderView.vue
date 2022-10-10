<template>
  <div class="image-view">
    <div class="background" @click="onClickBackground"/>
    <img class="image" alt="image" :src="images[idx]"/>
    <img class="left-arrow" alt="icon" src="@/assets/left-arrow.png" @click="onClickArrow(true)"/>
    <img class="right-arrow" alt="icon" src="@/assets/right-arrow.png" @click="onClickArrow(false)"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'ImageSliderView',
  props: [
      'images',
      'index'
  ],
  data() {
    return {
      idx: this.index
    }
  },
  methods: {
    onClickBackground() {
      this.$emit('close')
    },
    onClickArrow(isLeft: boolean) {
      if (isLeft) {
        if (this.idx !== 0) {
          this.idx -= 1
        }
      } else if (this.idx !== this.images.length - 1) {
        this.idx += 1
      }
    }
  }
})
</script>

<style lang="scss" scoped>

.image-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: black;
  }

  .image {
    width: 60%;
    height: 60%;
    z-index: 1;

    object-fit: cover;
    position: absolute;
  }

  .left-arrow {
    position: absolute;
    width: 80px;
    height: 80px;
    left: 0;
    margin-left: 20px;

    &:hover {
      cursor: pointer;
    }
  }

  .right-arrow {
    position: absolute;
    width: 80px;
    height: 80px;
    right: 0;
    margin-right: 20px;

    &:hover {
      cursor: pointer;
    }
  }
}

</style>