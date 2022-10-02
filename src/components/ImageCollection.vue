<template>
  <div class="main-frame">
    <div v-for="image in images">
      <img :src="image"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCollection',
  props: {
    images: []
  }
}
</script>

<style lang="scss" scoped>

</style>