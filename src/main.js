import {createApp} from 'vue'
import App from './App.vue'
//import axios from "axios"
import router from "./router"
import './index.css'
import './assets/css/bootstrap.css'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/dist/index.css'

const app = createApp(App);

app.use(ElementPlus)
.use(router)
//.use(axios)
.mount('#app');
