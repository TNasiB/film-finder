<template>
  <div class="movie-page">
    <div
      class="movie-page__bg"
      :style="`
        background-image: url(${film.value?.posterUrl})
      `"
    ></div>
    <div class="movie-page__info">
      <div class="movie-page__wrapper">
        <img :src="film.value?.posterUrlPreview" alt="" />
        <div class="movie-page__main">
          <div class="movie-page__main-header">
            <p class="movie-page__title">
              {{ film.value.nameRu }} ({{ film.value.year }})
            </p>
            <p class="movie-page__original-name">{{ film.value.nameOriginal }}</p>
            <n-rate readonly :default-value="film.value.ratingKinopoisk" :count="10" />
          </div>
          <div class="movie-page__article">
            <p class="movie-page__description">
              <b>Описание: </b>{{ film.value.description }}
            </p>
            <p class="movie-page__duration"><b>Длительность: </b>{{ movieDuration }}</p>
            <p class="movie-page__genres">
              <b>Жанры:</b>
              <n-tag v-for="{ genre } in film.value.genres" :key="genre"
                >{{ genre }}
              </n-tag>
            </p>
            <p class="movie-page__genres">
              <b>Страна:</b>
              <n-tag v-for="{ country } in film.value.countries" :key="country"
                >{{ country }}
              </n-tag>
            </p>
          </div>
        </div>
      </div>
      <div class="movie-player"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, computed, onMounted, watch } from "vue";
import { NRate, NButton, NTag } from "naive-ui";
import { fetchFilm } from "@/services/movieApi/rest/fetchTop.js";
import { loadScript, unloadScript } from "vue-plugin-load-script";
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

const getPlayer = () => {
  if (props.id) {
    const video = document.createElement("video");
    video.controls = true;
    video.setAttribute("data-kinopoisk", props.id);
    video.id = "yohoho";
    document.querySelector(".movie-player").appendChild(video);
    loadScript("https://yohoho.cc/yo.js");
    unloadScript("https://yohoho.cc/yo.js");
  } else {
    document.querySelector("#yohoho").remove();
  }
};

onMounted(getPlayer);

watch(props.id, getPlayer);
</script>

<style lang="scss" scoped>
.movie-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: scroll;

  &__bg {
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(25px);
      pointer-events: none;
    }
  }

  &__main {
    width: 100%;
  }

  &__title {
    font-size: 26px;
  }

  &__info {
    width: 90%;
    z-index: 10;
    background-color: #fff;
    height: 90vh;
    overflow: scroll;
    padding: 15px;
    padding-right: 25px;
    border-radius: 4px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__wrapper {
    display: flex;
    gap: 20px;
  }

  &__main-header {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-bottom: 15px;
  }

  &__article {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__original-name {
    color: #888;
  }

  &__description {
    font-size: 14px;
    text-align: justify;
  }

  &__genres {
    display: flex;
    gap: 8px;
  }
}
.movie-player {
  width: 100%;
  min-height: 60vh;
}
</style>
