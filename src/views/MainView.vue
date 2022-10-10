<template>
  <div class="main-view">
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
}

</style>