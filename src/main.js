import App from "./App.vue";
import router from "@/router";
import LoadScript from "vue-plugin-load-script";
import "./style.css";
import { createApp } from "vue";
import { vfmPlugin } from "vue-final-modal";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router);
app.use(LoadScript);
app.use(vfmPlugin);
app.use(createPinia());
app.mount("#app");
