import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'pages/home'
import Index from 'pages/index'
import Product from 'pages/product'
import Detail from 'pages/detail'
import Order from 'pages/order'
import OrderList from 'pages/orderList'
import OrderConfirm from 'pages/orderConfirm'
import OrderPay from 'pages/orderPay'
import Alipay from 'pages/alipay'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect:'/index',
        children: [
            {
                path: 'index',
                name: 'index',
                component: Index,
            },
            {
                path: 'product/:id',
                name: 'product',
                component: Product,
            },
            {
                path: 'detail/:id',
                name: 'detail',
                component: Detail,
            },
        ],
    },
    {
        path: '/cart',
        name: 'cart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ 'pages/cart'),
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
            {
                path: 'list',
                name: 'order-list',
                component: OrderList,
            },
            {
                path: 'confirm',
                name: 'order-confirm',
                component: OrderConfirm,
            },
            {
                path:'pay',
                name:'order-pay',
                component:OrderPay
            },
            {
                path:'alipay',
                name:'alipay',
                component:Alipay
            }
        ],
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
})

export default router
