import {createRouter, createWebHashHistory} from 'vue-router'

import LoginMain from "./components/LoginMain.vue";
import LoginHome from "./components/LoginHome.vue";

import MyUsers from "./components/menus/MyUsers.vue";
import MyOrders from "./components/menus/MyOrders.vue";
import MyRights from "./components/menus/MyRights.vue";
import MySettings from "./components/menus/MySettings.vue";
import MyGoods from "./components/menus/MyGoods.vue";
import MyList from "./components/list/MyList.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', component: LoginMain, name: 'LoginMain'},
        {
            path: '/home',
            redirect: '/home/users',
            component: LoginHome,
            name: 'home',
            children: [
                {path: 'users', component: MyUsers},
                {path: 'rights', component: MyRights},
                {path: 'goods', component: MyGoods},
                {path: 'orders', component: MyOrders},
                {path: 'settings', component: MySettings},
                {path: 'users/:id', component: MyList, props: true}
            ]
        },
    ]
})

router.beforeEach((to,form,next)=>{
    if (to.path === '/login') return next()
    const tokenStr = localStorage.getItem('token')
    if (!tokenStr) {
        next('/login')
    } else {
        next()
    }
})

export default router