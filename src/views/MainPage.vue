<template>
  <div class="main-page">
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
  padding: 0 0 0 20px;
}
</style>
