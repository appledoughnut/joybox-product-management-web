<template>
  <div class="edit-view">
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