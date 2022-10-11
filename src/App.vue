<template>
  <div class="main">
    <MainHeader/>
    <router-view/>
    <FooterView/>
  </div>
</template>

<style lang="scss">

html body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main {
  min-height: 1000px;
  height: 100%;
  background: #1b2838;
}

* {
  font-family: serif;
}

</style>
<script>
import MainHeader from '@/views/MainHeaderView'
import MainPage from '@/views/ProductsView'
import FooterView from '@/views/FooterView'
export default {
  components: { FooterView, MainPage, MainHeader }
}
</script>