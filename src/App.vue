<template>
  <div class="main">
    <MainHeader/>
    <router-view/>
  </div>
</template>

<style>

html body {
  margin: 0;
}

.main {
  display: flex;
  flex-direction: column;
}

</style>
<script>
import MainHeader from '@/views/MainHeader'
import MenuSelector from '@/views/MenuSelector'
import MainPage from '@/views/MainPage'
export default {
  components: { MainPage, MenuSelector, MainHeader }
}
</script>