<template>
  <div class="main-page">
    <p class="app__workplace-title">ТОП-250</p>
    <film-list />
  </div>
</template>

<script setup>
import FilmList from "@/components/FilmList.vue";
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 15px;
}
</style>
