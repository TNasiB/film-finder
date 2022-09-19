<template>
  <div class="app">
    <app-header @toggle-sidebar="drawerShow = !drawerShow"></app-header>
    <div class="app__workplace">
      <router-view></router-view>
    </div>
    <vue-final-modal v-model="playerEnable" name="movie-player">
      <template v-slot="{ params }">
        <movie-player v-bind="params" />
      </template>
    </vue-final-modal>
    <side-bar-filter :drawerShow="drawerShow" @hide-sidebar="drawerShow = false" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { checkTokenFilm } from "./services/movieApi";
import { VueFinalModal } from "vue-final-modal";
import { useMovieStore } from "./stores/movies";
import AppHeader from "@/components/AppHeader.vue";
import MoviePlayer from "@/components/MoviePlayer.vue";
import SideBarFilter from "@/components/SideBarFilter.vue";

const token = checkTokenFilm();
if (token) {
  useMovieStore().fetchFilters();
}

const drawerShow = ref(false);
const playerEnable = ref(false);
</script>

<style lang="scss">
.app {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  gap: 20px;
}
</style>
