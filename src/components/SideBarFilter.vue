<template>
  <n-drawer
    class="side-bar-filter"
    v-model:show="drawerShow"
    :width="502"
    placement="left"
    style="--n-header-padding: 0"
    :on-after-leave="() => $emit('hide-sidebar')"
  >
    <n-drawer-content :header-style="'background-color: #fff'">
      <template #header>
        <div class="side-bar-filter__header">
          <p class="side-bar-filter__logo">
            <n-icon
              @click="$emit('hide-sidebar')"
              class="side-bar-filter__logo-icon"
            >
              <grid-view-sharp /> </n-icon
            ><span>FilmFinder</span>
          </p>
        </div>
      </template>
      <n-form class="side-bar-filter__form">
        <n-input placeholder="Film name" />
        <n-select placeholder="Select Country"></n-select>
        <p>rating</p>
        <n-slider v-model:value="form.rating" range :step="1" />
        <n-button type="info">Accept</n-button>
      </n-form>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup>
import { reactive } from "vue";
import {
  NDrawer,
  NDrawerContent,
  NIcon,
  NForm,
  NInput,
  NButton,
  NSelect,
  NSlider,
} from "naive-ui";
import { GridViewSharp } from "@vicons/material";

defineProps({ drawerShow: { type: Boolean, required: true } });
defineEmits(["hide-sidebar"]);

const form = reactive({
  name: "",
  country: "",
  rating: [0, 10],
});
</script>

<style lang="scss" scoped>
.side-bar-filter {
  &__header {
    height: 50px;
    padding: 15px;
  }

  &__logo {
    font-weight: 700;
    color: #000;
    display: flex;
    gap: 20px;
    align-items: center;
    user-select: none;
    font-size: 25px;
  }

  &__logo-icon {
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
