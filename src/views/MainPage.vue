<template>
  <div class="main-page">
    <MenuSelector/>
    <FloatingButton class="add-button" v-on:onClickButton="onClickAddButton"/>
  </div>
</template>

<script>
import MenuSelector from '@/views/MenuSelector'
import FloatingButton from '@/components/FloatingButton'
export default {
  name: 'MainPage',
  components: { FloatingButton, MenuSelector },
  methods: {
    onClickAddButton() {
      this.$router.push('/edit')
    }
  }
}
</script>

<style lang="scss" scoped>

.main-page {
  width: 100%;
}

</style>