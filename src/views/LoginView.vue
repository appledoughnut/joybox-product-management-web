<template>
  <div class="login-view">
    <div class="box">
      <label for="email">EmailAddress</label>
      <input class="email" type="email">
      <label for="email">Password</label>
      <input class="password" type="password">
      <SimpleButton class="login-button" message="Login" @click="onClickLoginButton"/>
    </div>
  </div>
</template>

<script>
import SimpleButton from '@/components/SimpleButton'
export default {
  name: 'LoginView',
  components: { SimpleButton },
  methods: {
    onClickLoginButton() {

    }
  }
}
</script>

<style lang="scss" scoped>

.login-view {
  width: 100%;
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
      padding: 16px;
      box-sizing: border-box;
      background: #E7F0FE;

      font-size: 20px;
      border: 0.5px solid grey;
      outline: none;
    }

    .login-button {
      width: 100%;
    }
  }
}

</style>