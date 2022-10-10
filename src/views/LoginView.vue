<template>
  <div class="login-view">
    <div class="box">
      <label for="email">EmailAddress</label>
      <InputComponent class="email"
                      type="email"/>
      <label for="email">Password</label>
      <InputComponent class="password"
                      type="password"/>
      <button class="login-button" @click="onClickLoginButton">Login</button>
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/InputComponent'
export default {
  name: 'LoginView',
  components: { InputComponent },
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

    .login-button {
      width: 100%;
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
  }
}

</style>