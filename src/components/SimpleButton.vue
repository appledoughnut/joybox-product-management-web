<template>
  <button class="btn">{{ message }}</button>
</template>

<script>
export default {
  name: 'SimpleButton',
  props: [
      'message'
  ]
}
</script>

<style lang="scss" scoped>
.btn {
  width: 20%;
  font-size: 18px;
  padding: 10px;
  background: #2c7aff;
  color: white;
  border: 0;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
}
</style>