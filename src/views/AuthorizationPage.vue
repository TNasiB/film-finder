<template>
  <div class="auth-page">
    <div class="auth-page__bg"></div>
    <n-card title="Authorization" class="auth-page__wrapper">
      <n-form class="auth-page__form">
        <n-input
          class="auth-page__input"
          v-model:value="form.login"
          placeholder="login"
        />
        <n-input
          class="auth-page__input"
          v-model:value="form.token"
          placeholder="token"
        />
        <n-input
          class="auth-page__input"
          v-model:value="form.password"
          placeholder="password"
          type="password"
        />
        <n-button @click="logIn" type="primary"> Login </n-button>
      </n-form>
    </n-card>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { NForm, NInput, NButton, NCard } from "naive-ui";
import { setToken } from "@/services/movieApi/index.js";
import router from "@/router";

const form = reactive({
  login: "",
  password: "",
  token: "",
});

const logIn = () => {
  setToken(form.token);
  router.push("/");
};
</script>

<style lang="scss" scoped>
.auth-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__wrapper {
    width: 300px;
  }

  &__bg {
    background: url("../assets/img/auth-bg.jpg");
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-filter: blur(25px);
    -moz-filter: blur(25px);
    -o-filter: blur(25px);
    -ms-filter: blur(25px);
    filter: blur(25px);
  }
}
</style>
