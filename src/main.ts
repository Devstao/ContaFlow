import "@/assets/js/color-modes.js";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import { createBootstrap } from "bootstrap-vue-next/plugins/createBootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(createBootstrap()); // Important
app.mount("#app");
