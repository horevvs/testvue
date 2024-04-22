import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/Home.vue'
import AboutView from './components/About.vue'
import Basket from './components/Basket.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/basket', component: Basket },
  { path: '/:id', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})




const app = createApp(App)
app.use(router)
app.mount('#app')