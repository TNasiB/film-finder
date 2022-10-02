<template>
  <div class="carousel-film" :style="filmPosterUrl">
    <p class="carousel-film__name">
      {{ nameRu }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  posterUrl: { type: String, required: true },
  kinopoiskId: { type: Number, required: true },
  nameRu: { type: String, required: true },
});

const filmPosterUrl = computed(() => {
  return {
    "--bg-image": `url(${props.posterUrl})`,
  };
});
</script>

<style lang="scss" scoped>
.carousel-film {
  width: 100%;
  height: 499px;
  background-image: var(--bg-image);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: invert(80%);
  padding: 15px;

  &__name {
    color: #fff;
    font-size: 160px;
    line-height: 160px;
    font-weight: 700;
    -webkit-text-stroke: 1px #000;
  }
}
</style>
