import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/tailwind.css";
import store from "./components/store";

// import VueMyToasts from "vue-my-toasts";
// // import "vue-my-toasts/dist/vue-my-toasts.css";
// import TailwindComponent from "./components/toasts/TailwindToast.vue";

createApp(App).use(router).use(store).mount("#app");
