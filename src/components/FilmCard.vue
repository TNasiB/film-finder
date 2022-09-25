<template>
  <div
    class="film-card"
    :style="`background-image: url(${props.posterUrlPreview})`"
    @click="showMoreInformation"
  ></div>
</template>

<script setup>
import router from "@/router";

const props = defineProps({
  nameRu: { type: String, required: true },
  filmId: { type: Number, default: null },
  year: { type: String, required: true },
  genres: { type: Array, required: true },
  rating: { type: String, required: true },
  ratingVoteCount: { type: Number, required: true },
  posterUrl: { type: String, required: true },
  posterUrlPreview: { type: String, required: true },
  kinopoiskId: { type: Number, default: null },
});

const showMoreInformation = () => {
  router.push({ name: "movie", params: { id: props.filmId || props.kinopoiskId } });
};
</script>

<style lang="scss" scoped>
.film-card {
  width: 200px;
  height: 300px;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  transform: scale(1);
  transition: transform 0.1s;
  flex-grow: 1;

  &:hover {
    transform: scale(1.01);
  }
}
</style>
