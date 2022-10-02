<template>
  <div class="main-header">
    <div class="app-name" @click="routeToHome">
      Product Management Web
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'MainHeader',
  methods: {
    routeToHome() {
      this.$router.push('/')
    }
  }
})
</script>

<style lang="scss" scoped>

.main-header {
  padding: 10px 20px;
  height: 50px;
  background: rebeccapurple;
  display: flex;
  align-items: center;

  .app-name {
    font-weight: bold;
    font-size: 24px;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }

}


</style>