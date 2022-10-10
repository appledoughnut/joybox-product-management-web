<template>
  <div class="input-component">
    <input class="input" :type="type">
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: [
      'type'
  ]
}
</script>

<style lang="scss" scoped>

.input-component {
  .input {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;

    font-size: 20px;
    border: 0.5px solid grey;
    outline: none;
  }
}

</style>