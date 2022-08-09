<template>
  <div class="app-header">
    <span class="app-header__logo">FilmFinder</span>
    <div class="app-header__side-wrapper">
      <div class="app-header__search-container">
        <n-dropdown
          trigger="hover"
          :options="findValue.films"
          label-field="nameRu"
          @select="handleSelect"
        >
          <n-input
            v-model:value="findValue.query"
            class="app-header__search"
            size="small"
            @change="findFilm"
            ><template #suffix
              ><n-icon><search-round /></n-icon></template
          ></n-input>
        </n-dropdown>
        <!-- <div class="app-header__finded-list">
          <film-card-small
            v-for="film in findValue.films"
            :key="film.id"
            v-bind="film"
          />
        </div> -->
      </div>
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
import { NAvatar, NInput, NIcon, NDropdown } from "naive-ui";
import { SearchRound } from "@vicons/material";
import { useMovieStore } from "../stores/movies.js";
import FilmCardSmall from "@/components/FilmCardSmall.vue";

const movieStore = useMovieStore();
const findValue = reactive({
  query: "",
  films: [],
});
const findFilm = () =>
  movieStore
    .findFilm(findValue.query)
    .then(({ data }) => (findValue.films = data.films));
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

  &__logo {
    font-weight: 700;
    color: #fff;
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
}
</style>
