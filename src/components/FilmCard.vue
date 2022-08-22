<template>
  <div
    class="film-card"
    :style="`background-image: url(${props.posterUrlPreview}) `"
  ></div>
</template>

<script setup>
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
</script>

<style lang="scss" scoped>
.film-card {
  width: 200px;
  height: 300px;
  flex-grow: 1;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 4px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  transform: scale(1);
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.01);
  }

  &__title {
    color: #000;
    max-width: 200px;
    font-weight: 700;
    white-space: break-spaces;
    padding: 2px;
  }

  &__year {
    align-self: flex-start;
    background-color: #fff;
    font-weight: 700;
  }
}
</style>
