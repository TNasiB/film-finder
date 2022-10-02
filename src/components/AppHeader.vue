<template>
  <div class="app-header">
    <div class="app-header__container">
      <p class="app-header__logo">
        <n-icon
          color="#000"
          @click="$emit('toggle-sidebar')"
          class="app-header__logo-icon"
        >
          <grid-view-sharp /> </n-icon
        ><span style="cursor: pointer" @click="router.push('/')">FilmFinder</span>
      </p>
      <div class="app-header__side-wrapper">
        <n-input-group>
          <n-input v-model:value="findValue" @keydown.enter="findFilm" />
          <n-button type="info" @click="findFilm">Search</n-button>
        </n-input-group>
        <n-avatar
          size="large"
          src="https://kartinkin.net/uploads/posts/2022-03/1646360045_3-kartinkin-net-p-kartinki-rik-3.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NAvatar, NIcon, NInput, NInputGroup, NButton } from "naive-ui";
import { GridViewSharp } from "@vicons/material";
import { useMovieStore } from "../stores/movies.js";
import router from "@/router";

const movieStore = useMovieStore();

const findValue = ref("");
//FIXME: ДОбавить историю поиска и просмотра
const findFilm = () => {
  if (findValue.value) {
    movieStore.findFilm(findValue.value).then(() => {
      router.push({
        name: "keyword",
        params: { keyword: findValue.value },
      });
      findValue.value = "";
    });
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  padding: 5px 20px;
  font-size: 25px;
  color: #fff;

  &__container {
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-weight: 700;
    color: #000;
    display: flex;
    gap: 20px;
    align-items: center;
    user-select: none;
  }

  &__logo-icon {
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }

  &__side-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__search-container {
    display: flex;
  }

  &__finded-list {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 5px;
    position: absolute;
  }

  &__select-type {
    display: flex;
    gap: 10px;
    font-weight: 700;
  }

  &__select-item {
    cursor: pointer;
  }
}
</style>
