import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/tailwind.css'
import store from './components/store'

// import VueMyToasts from "vue-my-toasts";
// // import "vue-my-toasts/dist/vue-my-toasts.css";
// import TailwindComponent from "./components/toasts/TailwindToast.vue";

const app = createApp(App).use(router).use(store)
app.config.errorHandler = (error, view, info) => {
  // send to sentry or any bug db.
  alert(error)
}
app.config.performance = true

app.mount('#app')
