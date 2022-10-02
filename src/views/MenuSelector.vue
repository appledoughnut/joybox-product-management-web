<template>
  <div class="main-menus">
    <ul>
      <li class="menu" v-for="menu in menus">
        {{ menu.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

interface MenuItem {
  title: string
}

export default defineComponent({
  name: 'MenuSelector',
  data() {
    return {
      menus: [] as MenuItem[]
    }
  },
  mounted() {
    this.menus.push({
      title: 'Games'
    })
  }
})
</script>

<style lang="scss" scoped>

.main-menus {
  //height: 100%;
  width: 15%;
  background: black;

  ul {
    margin: 0;
    padding: 0px;

    .menu {
      color: white;
      list-style: none;
      padding: 10px;
      font-size: 24px;
      text-align: center;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

</style>