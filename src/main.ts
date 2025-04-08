import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Import your CSS
import './assets/main.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Add your routes here
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
