<template>
  <div class="signup-view">
    <div class="box">
      <label for="email">EmailAddress</label>
      <input class="email" type="email">
      <label for="password">Password</label>
      <input class="password" type="password">
      <label for="check-password">Check Password</label>
      <input class="password" type="password">
      <SimpleButton class="done-button" message="Done" @click="onClickDone"/>
    </div>
  </div>
</template>

<script>
import SimpleButton from '@/components/SimpleButton'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SignupView',
  components: { SimpleButton },
  methods: {
    onClickDone() {

    }
  }
})
</script>

<style lang="scss" scoped>

.signup-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .box {
    margin-top: 50px;
    padding: 30px 50px;
    width: 20%;
    display: flex;
    flex-direction: column;
    background: #181a21;

    * {
      margin-bottom: 12px;
    }

    label {
      font-size: 18px;
      color: white;
    }

    input {
      width: 100%;
      padding: 12px;
      box-sizing: border-box;
      background: #E7F0FE;

      font-size: 20px;
      border: 0.5px solid grey;
      outline: none;
    }

    .done-button {
      width: 100%;
    }
  }
}
</style>