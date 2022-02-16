import { createApp } from "vue";
import store from "./components/store";
import App from "./App.vue";
import Chakra, { CThemeProvider } from "@chakra-ui/vue";
import router from "./router";
import "./index.css";
import "./assets/tailwind.css";

createApp(App)
    .use(router)
    .use(store)
    .use(Chakra)
    .mount("#app");
