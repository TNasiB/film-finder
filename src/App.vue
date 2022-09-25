<template>
  <div class="app">
    <app-header @toggle-sidebar="drawerShow = !drawerShow"></app-header>
    <div class="app__workplace">
      <router-view></router-view>
    </div>
    <side-bar-filter :drawerShow="drawerShow" @hide-sidebar="drawerShow = false" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { checkTokenFilm } from "./services/movieApi";
import { useMovieStore } from "./stores/movies";
import AppHeader from "@/components/AppHeader.vue";
import SideBarFilter from "@/components/SideBarFilter.vue";

const token = checkTokenFilm();
if (token) {
  useMovieStore().fetchFilters();
}

const drawerShow = ref(false);
</script>

<style lang="scss">
.app {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  &__workplace {
    margin: 0 auto;
    max-width: 1368px;
  }

  &__workplace-title {
    font-size: 26px;
  }
}
</style>
