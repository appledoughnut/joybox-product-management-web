<template>
  <div class="main">
    <MainHeader/>
    <router-view/>
  </div>
</template>

<style lang="scss">

html body {
  margin: 0;
  width: 100%;
  height: 100vh;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main {
  height: 100%;
  background: #1b2838;
}

</style>
<script>
import MainHeader from '@/views/MainHeaderView'
import MainPage from '@/views/MainView'
export default {
  components: { MainPage, MainHeader }
}
</script>