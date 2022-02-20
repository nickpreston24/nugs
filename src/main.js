import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/tailwind.css";
import store from "./components/store";

import VueMyToasts from "vue-my-toasts";
import "vue-my-toasts/dist/vue-my-toasts.css";
import YourToastComponent from "~/components/toasts/YourToastComponent";
import TailwindComponent from "vue-my-toasts/src/components/toasts/TailwindComponent";

createApp(App)
  .use(VueMyToasts, {
    component: TailwindComponent,
    options: {
      width: "400px",
      position: "bottom-right",
      padding: "1rem",
    },
  })
  .use(router)
  .use(store)
  .mount("#app");
