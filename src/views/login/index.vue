<!--
 * @Author: 李伟
 * @Date: 2020-08-07 12:47:14
 * @LastEditTime: 2020-08-11 12:47:34
 * @LastEditors: Please set LastEditors
 * @Description: 登录页面
 * @FilePath: /vue-antdv-admin/src/views/login/index.vue
-->
<template>
  <div class="login-container">
    <div class="login-head">
      <img src="../../images/va.png" alt="vue iview admin logo" />
      <h1 class="login-title">
        <a href="https://vuejs.org/">Vue</a>
        <a href="http://iview.talkingdata.com/"> iView</a> Admin
      </h1>
    </div>
    <div class="login-box">
      <Alert v-show="showUserAlert" type="error" show-icon>
        {{ userInputTooltip }}
      </Alert>
      <Input
        class="login-user-input"
        placeholder="用户名"
        v-model="userValue"
      />
      <Alert v-show="showPassAlert" type="error" show-icon>
        {{ passInputTooltip }}
      </Alert>
      <Input
        type="password"
        class="login-pass-input"
        placeholder="用户密码"
        v-model="passValue"
      />
      <div class="login-button-box">
        <Button
          :disabled="logining"
          class="login-submit"
          type="primary"
          @click="handleLoginClick"
        >
          登录
        </Button>
      </div>
    </div>
    <div class="login-tooltip">
      <div v-for="item in accounts" :key="item.user">
        user: {{ item.user }} pass: {{ item.pass }}
        <Button @click="handleSetAccountClick(item)">填充</Button>
      </div>
      其他账户都可以使用, 密码大于等于六位数即可
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      userInputTooltip: "用户名错误",
      passInputTooltip: "密码错误",
      showUserAlert: false,
      showPassAlert: false,
      userValue: "",
      passValue: "",
      logining: false,
      redirect: undefined,
      accounts: [
        {
          user: "admin",
          pass: "111111",
        },
        {
          user: "editor",
          pass: "111111",
        },
      ],
    };
  },
  methods: {
    handleLoginClick: function() {
      const userValue = this.userValue;
      const passValue = this.passValue;
      if (userValue.length === 0) {
        this.userInputTooltip = "用户名不能为空";
        this.showUserAlert = true;
        return
      }
      if (passValue.length === 0) {
        this.passInputTooltip = "密码不能为空";
        this.showPassAlert = true;
        return
      }
      if (passValue.length < 6) {
        this.passInputTooltip = "密码不少于六位";
        this.showPassAlert = true;
        return
      }
      if (
        (userValue === "admin" || userValue === "editor") &&
        passValue !== "111111"
      ) {
        this.passInputTooltip = "密码错误";
        this.showPassAlert = true;
        return
      }
      if (
        userValue &&
        passValue &&
        !this.showPassAlert &&
        !this.showUserAlert
      ) {
        this.logining = true;
        this.$store
          .dispatch("login", { user: userValue, pass: passValue })
          .then(() => {
            this.logining = false;
            this.$router.push({ path: this.redirect || "/" });
          });
      }
    },
    handleSetAccountClick: function(item) {
      this.userValue = item.user;
      this.passValue = item.pass;
    },
  },
  watch: {
    userValue: function(val) {
      if (val > 0) {
        this.showUserAlert = false;
      }
    },
    passValue: function(val) {
      if (val > 0) {
        this.showPassAlert = false;
      }
    },
    $route: {
      handler: function(route) {
        const query = route.query;
        console.log(query);
        if (query) {
          this.redirect = query.redirect;
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  .login-head {
    display: flex;
    position: absolute;
    align-items: center;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    & img {
      width: 100px;
      height: 100px;
    }
    .login-title {
      user-select: none;
      & a {
        color: black;
      }
    }
  }

  .login-tooltip {
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 150px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .login-box {
    width: 400px;
    padding: 30px;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.05),
      -3px -3px 5px rgba($color: #000000, $alpha: 0.1);

    .login-user-input {
      margin-top: 5px;
      margin-bottom: 20px;
    }
    .login-pass-input {
      margin-top: 5px;
      margin-bottom: 20px;
    }
    .login-submit {
      width: 100%;
      margin-top: 20px;
    }
    .login-button-box {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
