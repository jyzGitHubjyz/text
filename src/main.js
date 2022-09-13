import {createApp} from 'vue'
import App from './App.vue'
//import axios from "axios"
import store from './store'
import router from "./router"
import './index.css'
import './assets/css/bootstrap.css'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/dist/index.css'

const app = createApp(App);

app.use(ElementPlus)
    .use(router)
    .use(store)
    //.use(axios)
    .mount('#app');
