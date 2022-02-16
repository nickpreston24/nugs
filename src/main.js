import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/tailwind.css";
import store from './components/store'

createApp(App).use(router).use(store).mount('#app')
