<template>
  <div class="movie-player"></div>
</template>

<script>
import { loadScript, unloadScript } from "vue-plugin-load-script";

export default {
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  updated() {
    if (this.id) {
      const video = document.createElement("video");
      video.controls = true;
      video.setAttribute("data-kinopoisk", this.id);
      video.id = "yohoho";
      document.querySelector(".movie-player").appendChild(video);
      loadScript("https://yohoho.cc/yo.js");
    } else {
      document.querySelector("#yohoho").remove();
      unloadScript("https://yohoho.cc/yo.js");
    }
  },
};
</script>

<style lang="scss" scoped>
.movie-player {
  width: 700px;
  height: 600px;
  background-color: #fff;
}
</style>
