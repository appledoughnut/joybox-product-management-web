<template>
  <div class="login-view">
    <div class="box">
      <label for="email">EmailAddress</label>
      <input v-model="email" class="email" type="email">
      <label for="email">Password</label>
      <input v-model="password" class="password" type="password">
      <SimpleButton class="login-button" message="Login" @click="onClickLogin"/>
      <SimpleButton class="signup-button" message="Signup" @click="onClickSignup"/>
    </div>
  </div>
</template>

<script>
import SimpleButton from '@/components/SimpleButton'
import userService from '@/services/user'

export default {
  name: 'LoginView',
  components: { SimpleButton },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    onClickLogin() {
      userService.login({
        email: this.email,
        password: this.password
      })
          .then(res => console.log(res))
          .catch(e => console.log(e))
    },
    onClickSignup() {
      this.$router.push('/signup')
    }
  }
}
</script>

<style lang="scss" scoped>

.login-view {
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

    .login-button {
      width: 100%;
    }

    .signup-button {
      width: 100%;
      background: #1b2838;
      border: 1px solid lightgray;
    }
  }
}

</style>