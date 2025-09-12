import "@/assets/js/color-modes.js";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import { createBootstrap } from "bootstrap-vue-next/plugins/createBootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(createBootstrap()); // Important
app.mount("#app");
