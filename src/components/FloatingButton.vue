<template>
  <div class="main-frame">
    <img class="image" src="@/assets/add.png" @click="onClickButton"/>
  </div>
</template>

<script>
export default {
  name: 'FloatingButton',
  methods: {
    onClickButton() {
      this.$emit('onClickButton')
    }
  }
}
</script>

<style lang="scss" scoped>

.main-frame {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;
  width: 80px;
  height: 80px;
  padding: 10px;
  border-radius: 20px;
  background: green;

  .image {
    object-fit: fill;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
}

</style>