<template>
  <div class="app-header">
    <p class="app-header__logo">
      <n-icon @click="$emit('toggle-sidebar')" class="app-header__logo-icon">
        <grid-view-sharp /> </n-icon
      ><span>FilmFinder</span>
      <div class="app-header__select-type">
      <span class="app-header__select-item">Movies</span>
      <span class="app-header__select-item">Series</span>
    </div>
    </p>
    <div class="app-header__side-wrapper">
      <n-input-group>
        <n-input />
        <n-button ghost>
          Search
        </n-button>
    </n-input-group>
      <n-avatar
        round
        size="large"
        src="https://www.meme-arsenal.com/memes/b5e4d33d9a0a228e05b621bdcb2f7efe.jpg"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { NAvatar, NIcon, NInput, NInputGroup, NButton } from "naive-ui";
import { GridViewSharp } from "@vicons/material";
import { useMovieStore } from "../stores/movies.js";

const movieStore = useMovieStore();
const findValue = reactive({
  query: "",
  films: [],
});
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 5px 20px;
  font-size: 25px;
  color: #fff;
  &__logo {
    font-weight: 700;
    color: #fff;
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
