<template>
  <div class="film-list-small">{{ nameRu }}</div>
</template>

<script setup>
defineProps({
  nameRu: { type: String, required: true },
});
</script>

<style lang="scss" scoped></style>
