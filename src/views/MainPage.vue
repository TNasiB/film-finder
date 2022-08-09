<template>
  <div class="main-page">
    <!-- <n-layout has-sider>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="120"
        :width="240"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        bordered
      >
        <div class="main-page__sidebar">11</div>
      </n-layout-sider>
    </n-layout> -->
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="0"
        :width="240"
        :show-collapsed-content="false"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        bordered
      >
        <div class="main-page__sidebar">11</div>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <film-list />
      </n-layout-content>
    </n-layout>
  </div>
</template>

<script setup>
import FilmList from "@/components/FilmList.vue";
import { NLayoutSider, NLayout, NLayoutContent } from "naive-ui";
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  height: 100%;
  padding: 0 20px 0;

  &__sidebar {
    z-index: 2;
  }
}
</style>
