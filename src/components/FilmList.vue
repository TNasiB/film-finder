<template>
  <div class="film-list" @scroll="checkScroll">
    <n-carousel
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      draggable
      autoplay
      show-arrow
    >
      <carousel-film v-for="film in moviesStore.premiers" :key="film.id" v-bind="film" />
    </n-carousel>
    <div class="film-list__wrapper">
      <FilmCard v-for="film in moviesStore.movies" :key="film.filmId" v-bind="film" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "@/stores/movies.js";
import { NCarousel } from "naive-ui";
import FilmCard from "@/components/FilmCard.vue";
import CarouselFilm from "@/components/CarouselFilm.vue";

const moviesStore = useMovieStore();

const uploadFilms = () => {
  moviesStore.fetchMovies(page.value).then(() => page.value++);
};

const page = ref(1);

uploadFilms();
moviesStore.fetchPremiersList({
  year: "2022",
  month: "OCTOBER",
});

let show = ref(true);

moviesStore.fetchMovies().then(() => (show.value = false));

const checkScroll = (e) => {
  const { scrollHeight, scrollTop, clientHeight } = e.target;
  if (scrollHeight - scrollTop - clientHeight === 0) uploadFilms();
};
</script>

<style lang="scss" scoped>
.film-list {
  width: 100%;
  overflow: auto;
  height: 100px;
  flex-grow: 1;
  padding: 15px 15px 0;

  &__wrapper {
    flex-grow: 1;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 15px;
  }

  & .n-carousel {
    height: auto;
    cursor: pointer;
    margin-bottom: 10px;
  }
}
</style>
