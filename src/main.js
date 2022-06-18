import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/tailwind.css'
import store from './components/store'

const app = createApp(App)

app.config.performance = true

app.config.errorHandler = (err, vm, info) => {
  let handler,
    current = vm
  if (vm.$options.errorHandler) {
    handler = vm.$options.errorHandler
  } else {
    while (current.$parent) {
      current = current.$parent
      if ((handler = current.$options.errorHandler)) break
    }
  }
  if (handler) handler.call(current, err, vm, info)
  else console.log('vue error:>>', err)
}

// TODO: try to find a fix for this to run
window.onerror = function (message, source, lineno, colno, error) {
  console.log('global Exception at line ', line, error)
}

window.addEventListener('unhandledrejection', function (event) {
  event.preventDefault()
  console.log('event', event)
})

app.use(router).use(store)
app.mount('#app')
