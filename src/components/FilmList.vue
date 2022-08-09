<template>
  <n-scrollbar
    content-style="display: flex; gap: 10px; flex-wrap: wrap; padding: 70px 15px 180px 0;"
    style="max-height: 100%"
    :on-scroll="checkScroll"
  >
    <FilmCard
      @click="showMoreInformation(film.filmId)"
      v-for="film in moviesStore.movies"
      :key="film.filmId"
      v-bind="film"
    />
  </n-scrollbar>
</template>

<script setup>
import { useMovieStore } from "@/stores/movies.js";
import { NScrollbar } from "naive-ui";
import FilmCard from "@/components/FilmCard.vue";
import router from "@/router";
import { ref } from "vue";

const moviesStore = useMovieStore();
const uploadFilms = () => {
  moviesStore.fetchMovies(page.value).then(() => page.value++);
};
const page = ref(1);
uploadFilms();

let show = ref(true);
moviesStore.fetchMovies().then(() => (show.value = false));

const showMoreInformation = (id) => {
  router.push({ name: "movie", params: { id } });
};

const checkScroll = (e) => {
  const { scrollHeight, scrollTop, clientHeight } = e.target;
  if (scrollHeight - scrollTop - clientHeight === 0) uploadFilms();
};
</script>

<style lang="scss" scoped>
.film-list {
  height: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
