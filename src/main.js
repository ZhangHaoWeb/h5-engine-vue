import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers';
import store from './store'
import Ecomponents from './components/editor'

createApp(App)
    .use(router)
    .use(store)
    .use(Ecomponents)
    .mount('#app')


