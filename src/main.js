import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/router';
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
