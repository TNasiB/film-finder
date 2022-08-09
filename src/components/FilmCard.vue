<template>
  <div
    class="film-card"
    :style="`background-image: url(${props.posterUrlPreview}) `"
  >
    <n-tag type="success" class="film-card__year">{{ props.year }}</n-tag>
    <n-tag class="film-card__title">{{ props.nameRu }}</n-tag>
  </div>
  <!-- <n-card class="film-card" hoverable>
    <template #header>
      <p class="flilm-card__title">{{ nameRu }}</p>
    </template>
    <template #header-extra>
      <n-rate readonly :default-value="definedRate" size="small" />
    </template>
    <template #cover>
      
    </template>
    <div class="film-card__content"></div>
    <template #footer> #footer </template>
    <template #action> #action </template>
  </n-card> -->
</template>

<script setup>
import { NTag } from "naive-ui";
import { defineProps } from "vue";

const props = defineProps({
  nameRu: { type: String, required: true },
  filmId: { type: Number, required: true },
  year: { type: String, required: true },
  genres: { type: Array, required: true },
  rating: { type: String, required: true },
  ratingVoteCount: { type: Number, required: true },
  posterUrl: { type: String, required: true },
  posterUrlPreview: { type: String, required: true },
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
