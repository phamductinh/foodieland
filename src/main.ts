import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import i18n from './i18n'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
