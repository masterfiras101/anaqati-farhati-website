import './assets/css/app.css'
import './assets/css/tharwatemararuqa.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './routes/web'
import VueSmoothScroll from "vue3-smooth-scroll";



const app = createApp(App)
const pinia = createPinia();

app.use(VueSmoothScroll);
app.use(pinia)
app.use(router)
app.mount('#app')

