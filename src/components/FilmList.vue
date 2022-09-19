<template>
  <div class="film-list" @scroll="checkScroll">
    <div class="film-list__wrapper">
      <FilmCard v-for="film in moviesStore.movies" :key="film.filmId" v-bind="film" />
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/movies.js";
import FilmCard from "@/components/FilmCard.vue";
import { ref } from "vue";

const moviesStore = useMovieStore();

const uploadFilms = () => {
  moviesStore.fetchMovies(page.value).then(() => page.value++);
};

const page = ref(1);

uploadFilms();

let show = ref(true);

moviesStore.fetchMovies().then(() => (show.value = false));

const checkScroll = (e) => {
  const { scrollHeight, scrollTop, clientHeight } = e.target;
  if (scrollHeight - scrollTop - clientHeight === 0) uploadFilms();
};
</script>

<style lang="scss" scoped>
.film-list {
  height: calc(100vh - 70px);
  width: 100%;
  overflow-y: scroll;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 auto;
    flex-grow: 1;
    max-width: 1368px;
    justify-content: center;
  }
}
</style>
