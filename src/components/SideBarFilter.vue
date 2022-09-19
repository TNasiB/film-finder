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
            <n-icon @click="$emit('hide-sidebar')" class="side-bar-filter__logo-icon">
              <grid-view-sharp /> </n-icon
            ><span>FilmFinder</span>
          </p>
        </div>
      </template>
      <n-form class="side-bar-filter__form">
        <n-select
          v-model:value="form.country"
          filterable
          placeholder="Select Country"
          :options="store.countries"
          label-field="country"
          value-field="id"
        />
        <n-select
          v-model:value="form.genres"
          filterable
          placeholder="Select genre"
          :options="store.genres"
          label-field="genre"
          value-field="id"
        />
        <p>rating</p>
        <n-slider v-model:value="rating" range :step="1" :max="10" :min="1" />
        <p>year</p>
        <n-slider v-model:value="year" range :step="1" :max="2022" :min="1850" />

        <n-button type="info" @click="findByFilters">Find!</n-button>
      </n-form>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useMovieStore } from "@/stores/movies.js";
import {
  NDrawer,
  NDrawerContent,
  NIcon,
  NForm,
  NButton,
  NSelect,
  NSlider,
} from "naive-ui";
import { GridViewSharp } from "@vicons/material";

const store = useMovieStore();

defineProps({ drawerShow: { type: Boolean, required: true } });
defineEmits(["hide-sidebar"]);

const form = reactive({
  country: "",
  yearFrom: null,
  yearTo: null,
  ratingFrom: null,
  ratingTo: null,
});

const rating = ref([0, 10]);
const year = ref([1800, 2022]);

const findByFilters = () => {
  form.ratingFrom = year.value[0];
  form.yearTo = year.value[1];
  form.ratingTo = rating.value[1];
  form.ratingFrom = rating.value[0];

  store.findFilmsByFilter(form);
};
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
