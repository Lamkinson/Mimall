<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="content-left">
                    <a href="javascript:;">Santi</a>
                    <a href="javascript:;">MIUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="content-right">
                    <a href="javascript:;" v-if="username">{{ username }}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username" @click="logout">退出</a>
                    <a href="javascript:;" v-if="username" @click="goToList">我的订单</a>
                    <a class="cart" @click="goToCart" :class="{ 'has-cart-count': cartCount > 0 }"
                        ><span class="icon-cart"></span>购物车({{ cartCount }})</a
                    >
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item" @mouseenter="showChildren" @mouseleave="hideChildren">
                        <span>小米手机</span>
                    </div>
                    <div class="item">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                    <div class="item">
                        <span>笔记本</span>
                        <div class="children"></div>
                    </div>
                    <div class="item">
                        <span>家电</span>
                        <div class="children"></div>
                    </div>
                    <div class="item">
                        <span>路由器</span>
                        <div class="children"></div>
                    </div>
                    <div class="item">
                        <span>智能硬件</span>
                        <div class="children"></div>
                    </div>
                    <div class="item">
                        <span>服务</span>
                    </div>
                    <div class="item">
                        <span>社区</span>
                    </div>
                </div>
                <div class="header-search" ref="headerSearch">
                    <input type="text" class="search-box" />
                    <input type="submit" class="search-btn" value="" />
                </div>
            </div>

            <transition name="move">
                <div
                    class="children-wrapper"
                    v-show="childrenVisible"
                    @mouseenter="showChildren"
                    @mouseleave="hideChildren"
                >
                    <div class="children">
                        <ul>
                            <li class="product" v-for="(item, index) in phoneData" :key="index">
                                <a :href="'/#/product/' + item.id" target="_blank">
                                    <div class="pro-img">
                                        <img :src="item.mainImage" width="160" />
                                    </div>
                                    <div class="pro-name">{{ item.name }}</div>
                                    <div class="pro-price">
                                        {{ item.price | toInt }}
                                    </div></a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
    name: 'NavHeader',
    data() {
        return {
            childrenVisible: false,
            chiildrenTimeOut: {},
            phoneData: [],
        }
    },
    computed: {
        username() {
            return this.$store.state.username
        },
        cartCount() {
            return this.$store.state.cartCount
        },
    },
    mounted() {
        this.axios
            .get('/products', {
                params: {
                    categoryId: '100012',
                },
            })
            .then((res) => {
                if (res.list.length > 6) this.phoneData = res.list.slice(0, 6)
            })
        const params = this.$route.params
        if (params && params.from === 'login') {
            this.getCartCount()
        }
    },
    filters: {
        toInt(val) {
            if (!val) return 0
            return val.toFixed(0) + '元起'
        },
    },
    methods: {
        showChildren() {
            clearTimeout(this.childrenTimeOut)
            if (!this.childrenVisible) {
                this.childrenTimeOut = setTimeout(() => {
                    this.childrenVisible = true
                }, 200)
            }
        },
        hideChildren() {
            clearTimeout(this.childrenTimeOut)
            if (this.childrenVisible) {
                this.childrenTimeOut = setTimeout(() => {
                    this.childrenVisible = false
                }, 200)
            }
        },
        goToCart() {
            this.$router.push('/cart')
        },
        goToList(){
            this.$router.push('/order/list')
        },
        getCartCount() {
            this.axios.get('/carts/products/sum').then((res = {}) => {
                this.$store.dispatch('saveCartCount', res)
            })
        },
        login() {
            this.$router.push('/login')
        },
        logout() {
            this.axios.post('/user/logout').then(() => {
                Message.success('成功退出登录')
                this.$cookie.set('userId', '', { expires: '-1' })
                this.$store.dispatch('saveUsername', '')
                this.$store.dispatch('saveCartCount', '0')
            })
        },
    },
}
</script>

<style lang="scss">
@import 'resource/scss/config.scss';
@import 'resource/scss/mixin.scss';

.header {
    .nav-topbar {
        height: 39px;
        line-height: 39px;
        background-color: $colorB;
        color: #b0b0b0;
        .container {
            width: $min-width;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a {
                display: inline-block;
                color: #b0b0b0;
                margin-right: 17px;
                &:hover {
                    color: #fff;
                }
            }
            .cart {
                width: 110px;
                background-color: #424242;
                text-align: center;
                cursor: pointer;
                margin: 0;
                .icon-cart {
                    @include bgImg('../../public/imgs/icon-cart.png');
                    width: 16px;
                    height: 12px;
                    background-position-y: 2px;
                    margin-right: 4px;
                }
            }
            .has-cart-count {
                background-color: $colorA;
                color: #fff;
            }
        }
    }
    .nav-header {
        position: relative;
        .container {
            width: $min-width;
            height: 100px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .header-logo {
                width: 55px;
                height: 55px;
                background-color: $colorA;
                position: relative;
                a {
                    display: inline-block;
                    width: 110px;
                    &:before,
                    &:after {
                        content: '';
                        display: inline-block;
                        height: 55px;
                        width: 55px;
                        transition: all 0.2s;
                        transform-origin: center;
                        z-index: 1;
                    }
                    &:before {
                        @include bgImg('../../public/imgs/mi-home.png');
                        margin-left: -55px;
                        opacity: 0;
                    }
                    &:after {
                        @include bgImg('../../public/imgs/mi-logo.png');
                    }
                    &:hover:before {
                        margin-left: 0;
                        opacity: 1;
                    }
                }
            }
            .header-menu {
                color: $colorB;
                font-size: $fontI;
                cursor: pointer;
                .item {
                    display: inline-block;
                    padding: 48px 8px;
                    &:hover {
                        color: $colorA;
                    }
                }
            }
            .header-search {
                border: 1px solid #e0e0e0;
                height: 48px;
                display: flex;
                transition: all 0.2s;
                .search-box {
                    display: inline-block;
                    width: 233px;
                    border-radius: 0;
                    border: none;
                    border-right: 1px solid #e0e0e0;
                    padding: 0 10px;
                    box-sizing: border-box;
                }
                .search-btn {
                    @include bgImg('../../public/imgs/icon-search.png', 18px);
                    cursor: pointer;
                    width: 55px;
                    border: none;
                    background-color: $colorG;
                    transition: all 0.2s;
                    &:hover {
                        background-color: $colorA;
                    }
                }
                &:hover,
                &:hover .search-box {
                    border-color: #b0b0b0;
                }
                &:focus-within,
                &:focus-within .search-box {
                    border-color: $colorA;
                }
            }
        }
        .children-wrapper {
            z-index: 999;
            height: 229px;
            overflow: hidden;
            position: absolute;
            opacity: 1;
            width: 100%;
            min-width: $min-width;
            top: 100px;
            left: 0;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.06);
            display: flex;
            justify-content: center;
            background-color: #fff;
            &.move-enter-active,
            &.move-leave-active {
                transition: all 0.3s;
            }
            &.move-enter,
            &.move-leave-to {
                height: 0;
            }
            .children {
                width: $min-width;
                display: flex;
                .product {
                    position: relative;
                    display: inline-block;
                    padding: 35px 12px 0 12px;
                    height: 100%;
                    width: 180px;
                    text-align: center;
                    font-size: 12px;
                    .pro-name {
                        line-height: 12px;
                        margin-top: 12px;
                        color: $colorB;
                    }
                    .pro-price {
                        color: $colorA;
                    }
                    &::after {
                        content: '';
                        position: absolute;
                        right: 0;
                        top: 35px;
                        height: 113px;
                        border-right: 1px solid $colorH;
                    }
                    &:last-child::after {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>
