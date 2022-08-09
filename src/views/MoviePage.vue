<template>
  <div class="movie-page">
    <div
      class="movie-page__bg"
      :style="`
    background-image: url(${film.value?.posterUrl})
  `"
    ></div>
    <n-card class="movie-page__info">
      <div class="movie-page__wrapper">
        <img :src="film.value?.posterUrlPreview" alt="" />
        <div class="movie-page__main">
          <div class="movie-page__main-header">
            <p class="movie-page__title">
              {{ film.value.nameRu }} ({{ film.value.year }})
            </p>
            <p>{{ film.value.nameOriginal }}</p>
            <n-rate
              readonly
              :default-value="film.value.ratingKinopoisk"
              :count="10"
            />
          </div>
          <div class="movie-page__article">
            <p class="movie-page__description">{{ film.value.description }}</p>
            <p class="movie-page__duration">
              Длительность: {{ movieDuration }}
            </p>
            <p class="movie-page__genres">
              Жанры:
              <span v-for="genre in film.value.genres" :key="genre.genre"
                >{{ genre.genre }},
              </span>
            </p>
            <p class="movie-page__genres">
              Страна:
              <span
                v-for="country in film.value.countries"
                :key="country.country"
                >{{ country.country }},
              </span>
            </p>
            <n-button @click="openPlayer" type="info"> Смотреть </n-button>
          </div>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { defineProps, reactive, computed } from "vue";
import { NCard, NRate, NButton } from "naive-ui";
import { fetchFilm } from "@/services/movieApi/rest/fetchTop.js";
import { $vfm } from "vue-final-modal";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const props = defineProps({
  id: { type: String, required: true },
});

const film = reactive({});
fetchFilm(props.id).then(({ data }) => (film.value = data));

const movieDuration = computed(() =>
  dayjs.duration(film.value.filmLength, "minutes").format("HH:mm")
);

const openPlayer = () => {
  $vfm.show("movie-player", { id: props.id });
};
</script>

<style lang="scss" scoped>
.movie-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;

  &__bg {
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-filter: blur(25px);
    -moz-filter: blur(25px);
    -o-filter: blur(25px);
    -ms-filter: blur(25px);
    filter: blur(25px);
    position: absolute;
  }

  &__main {
    width: 100%;
  }

  &__title {
    font-size: 26px;
  }

  &__info {
    width: 70%;
  }

  &__wrapper {
    display: flex;
    gap: 20px;
  }

  &__main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__description {
    font-size: 14px;
    text-align: justify;
  }
}
</style>
