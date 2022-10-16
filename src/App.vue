<template>
  <MainHeader/>
  <div class="content">
    <router-view/>
  </div>
  <FooterView/>
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
  background: #1b2838;

  .content {
    min-height: 1000px;
    height: 100%;
  }
}

* {
  font-family: serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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