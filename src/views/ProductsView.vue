<template>
  <div class="products-view">

  </div>
</template>

<script>
export default {
  name: 'MainPage',
  components: {},
  methods: {
    onClickAddButton() {
      this.$router.push('/edit')
    }
  }
}
</script>

<style lang="scss" scoped>

.main-view {
  width: 100%;
  height: 100%;
}

</style>