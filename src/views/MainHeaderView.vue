<template>
  <div class="header-view">
    <div class="left-content">
      <div class="logo" @click="routeToHome">
        <img alt="logo" class="image" src="@/assets/logo.png">
        <div class="name">
          <p>Joybox</p>
        </div>
      </div>
      <div class="header-menus">
        <p>Games</p>
      </div>
    </div>
    <div class="right-contents">
      <div class="add-game" @click="routeToAddGame" v-if="showAddGameButton">
        <p>Add Game</p>
      </div>
      <div class="login" @click="routeToLogin" v-if="showLoginButton">
        <p>Login</p>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'MainHeader',
  computed: {
    showLoginButton() {
      return this.$route.name !== "login"
    },
    showAddGameButton() {
      return this.$route.name !== "login" && this.$route.name !== 'edit product'
    }
  },
  methods: {
    routeToHome() {
      this.$router.push('/')
    },
    routeToLogin() {
      this.$router.push('/login')
    },
    routeToAddGame() {
      this.$router.push('/edit')
    }
  }
})
</script>

<style lang="scss" scoped>

.header-view {
  padding: 10px 20%;
  height: 50px;
  background: #181a21;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-content {
    display: flex;
    align-items: center;

    .logo {
      display: flex;
      height: 100%;
      margin-right: 50px;
      align-items: center;

      .image {
        width: 40px;
        height: 40px;
        object-fit: cover;
        margin-right: 14px;
      }

      .name {
        width: 100%;
        height: 100%;

        p {
          font-weight: bold;
          font-size: 28px;
          color: white;
        }
      }

      &:hover {
        cursor: pointer;
      }
    }

    .header-menus {
      p {
        font-size: 21px;
        color: white;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .right-contents {
    display: flex;

    div {
      font-size: 21px;
      color: white;
      margin-right: 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}


</style>