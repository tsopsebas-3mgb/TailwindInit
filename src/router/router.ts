import {createRouter, createWebHistory,type RouteRecordRaw} from 'vue-router';

const Home = () => import('../pages/Home.vue');
const Login = () => import('../pages/Login.vue');
const Favourites = () => import('../pages/Favourites.vue');
const NotFound = () => import('../pages/NotFound.vue');
const Movie = () => import('../pages/Movie.vue');
const routes: RouteRecordRaw[] = [
    {
        path:'/',
        name:'Home',
        component:Home,
    },
    {
        path:'/login',
        name:'Login',
        component:Login,
    },
    {
        path:'/favourites',
        name:'Favourites',
        component:Favourites,
    },
    {
        path:'/:pathMatch(.*)*',
        name:'NotFound',
        component:NotFound,
    },
    {
        path:'/movie/:id',
        name:'Movie',
        component:Movie,
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router