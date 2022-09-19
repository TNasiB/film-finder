<template>
  <div class="film-results">
    <p class="film-results__title">
      Search results for
      <span style="font-weight: 700">{{ props.keyword }} ({{ findedFilms.length }})</span>
    </p>
    <div class="film-results__wrapper">
      <film-card v-for="movie in findedFilms" v-bind="movie" :key="movie.id" />
    </div>
    <p class="film-results__title">
      <n-icon><FindReplaceFilled /></n-icon>Did not you find what you were looking for :(?
      Try changing the query.
    </p>
  </div>
</template>

<script setup>
import FilmCard from "@/components/FilmCard.vue";
import { useMovieStore } from "@/stores/movies";
import { NIcon } from "naive-ui";
import { FindReplaceFilled } from "@vicons/material";

const props = defineProps({
  keyword: { type: String, required: true },
});
const findedFilms = useMovieStore().findedFilms;
</script>

<style lang="scss" scoped>
.film-results {
  padding: 0 15px;
  width: 1368px;
  margin: 0 auto;

  &__wrapper {
    display: flex;
    gap: 20px;
  }

  &__title {
    font-size: 26px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
