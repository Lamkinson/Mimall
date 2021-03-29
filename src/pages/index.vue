<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrapper">
                        <li
                            class="menu-item"
                            v-for="(item, index) in menuList"
                            :key="index"
                        >
                            <a href="javascript:;"
                                >{{ item.name }}<span class="icon"></span>
                            </a>
                            <div class="sub-menu">
                                <ul
                                    v-for="(subItem, index) in item.subMenu"
                                    :key="index"
                                >
                                    <li
                                        v-for="(subSubItem, index) in subItem"
                                        :key="index"
                                    >
                                        <a
                                            :href="
                                                '/#/product/' + subSubItem.id
                                            "
                                        >
                                            <img
                                                :src="subSubItem.img"
                                                width="40"
                                                height="40"
                                            />
                                            <span class="text">
                                                {{ subSubItem.name }}</span
                                            >
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <swiper
                    ref="mySwiper"
                    class="swiper-no-swiping"
                    :options="swiperOption"
                >
                    <swiper-slide
                        v-for="(item, index) in slideList"
                        :key="index"
                    >
                        <a :href="'/#/product/' + item.id"
                            ><img :src="item.img"
                        /></a>
                    </swiper-slide>
                    <template v-slot:pagination>
                        <div class="swiper-pagination"></div>
                    </template>
                    <template v-slot:button-prev>
                        <div class="swiper-button-prev"></div>
                    </template>
                    <template v-slot:button-next>
                        <div class="swiper-button-next"></div>
                    </template>
                </swiper>
            </div>
        </div>
        <div class="ad-box">
            <div class="ad-wrapper">
                <a
                    :href="'/#/product/' + item.id"
                    v-for="(item, index) in adsList"
                    :key="index"
                >
                    <img v-lazy="item.img" width="296" height="167"
                /></a>
            </div>
        </div>
        <div class="home-brick-box">
            <div class="banner">
                <a href="/#/product/30"
                    ><img v-lazy="'/imgs/banner-1.png'" height="130"
                /></a>
            </div>
            <div class="box-hd">
                <h2 class="title">手机</h2>
            </div>
            <div class="box-bd">
                <div class="banner-left">
                    <a href="/#/product/35"
                        ><img src="/imgs/mix-alpha.jpg" height="614"
                    /></a>
                </div>
                <div class="banner-right">
                    <ul
                        class="phone-list"
                        v-for="(colItem, index) in phoneList"
                        :key="index"
                    >
                        <li
                            class="phone-item"
                            v-for="(rowItem, index) in colItem"
                            :key="index"
                        >
                            <a :href="rowItem.src">
                                <div class="figure">
                                    <img
                                        v-lazy="rowItem.img"
                                        width="160"
                                        height="160"
                                    />
                                </div>
                                <h3 class="name">{{ rowItem.name }}</h3>
                                <p class="desc">{{ rowItem.desc }}</p>
                                <p
                                    class="price"
                                    @click.prevent="addCart(rowItem.id)"
                                >
                                    <span>{{ rowItem.price }}</span
                                    >元<span>起</span>
                                    <span
                                        class="old-price"
                                        v-if="rowItem.oldPrice"
                                        >{{ rowItem.oldPrice }}元</span
                                    >
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <ServiceBar></ServiceBar>
        <Modal
            title="提示"
            confirmText="查看购物车"
            :btnType="1"
            modal="middle"
            :modalVisible="modalVisible"
            @cancel="hideModal"
            @submit="goToCart"
        >
            <template v-slot:body>
                <p>商品添加成功</p>
            </template>
        </Modal>
    </div>
</template>

<script>
import ServiceBar from 'components/ServiceBar'
import Modal from 'components/Modal'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// Import Swiper styles
import 'swiper/css/swiper.css'

export default {
    name: 'index',
    data() {
        return {
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: false,
                },
                speed: 1000,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            },
            slideList: [
                {
                    id: 42,
                    img: '/imgs/slider/slide-1.jpg',
                },
                {
                    id: 45,
                    img: '/imgs/slider/slide-2.jpg',
                },
                {
                    id: 46,
                    img: '/imgs/slider/slide-3.jpg',
                },
                {
                    id: 45,
                    img: '/imgs/slider/slide-4.jpg',
                },
                {
                    id: 45,
                    img: '/imgs/slider/slide-5.jpg',
                },
            ],
            menuList: [
                {
                    name: '手机 电话卡',
                    subMenu: [
                        [
                            {
                                id: 30,
                                img: '/imgs/item-box-1.png',
                                name: '小米CC9',
                            },
                            {
                                id: 31,
                                img: '/imgs/item-box-2.png',
                                name: '小米8青春版',
                            },
                            {
                                id: 32,
                                img: '/imgs/item-box-3.jpg',
                                name: 'Redmi K20 Pro',
                            },
                            {
                                id: 33,
                                img: '/imgs/item-box-4.jpg',
                                name: '移动4G专区',
                            },
                            {
                                id: 30,
                                img:
                                    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69a0df49cff71107977bbe3b48af15fa.png?thumb=1&w=64&h=64&f=webp&q=90',
                                name: 'Redmi K30s至尊纪念版',
                                src: 'https://www.mi.com/redmik30s',
                            },
                            {
                                id: 30,
                                img:
                                    'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=64&h=64',
                                name: '小米云服务',
                                src: 'https://www.mi.com/buy?product_id=8262',
                            },
                        ],
                        [
                            {
                                id: 30,
                                img:
                                    'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e5aa3cab478f5eeba1c7d4cf25cba9a.png?thumb=1&w=64&h=64&f=webp&q=90',
                                name: 'K40 Pro系列',
                                src: 'https://www.mi.com/redmik30s',
                            },
                        ],
                    ],
                },
                { name: '电视 盒子' },
                { name: '笔记本 显示器' },
                { name: '家电 插线板' },
                { name: '出行 穿戴' },
                { name: '智能 路由器' },
                { name: '电源 配件' },
                { name: '健康 儿童' },
                { name: '耳机 音箱' },
                { name: '生活 箱包' },
            ],
            adsList: [
                {
                    id: 33,
                    img: '/imgs/ads/ads-1.png',
                },
                {
                    id: 48,
                    img: '/imgs/ads/ads-2.jpg',
                },
                {
                    id: 45,
                    img: '/imgs/ads/ads-3.png',
                },
                {
                    id: 47,
                    img: '/imgs/ads/ads-4.jpg',
                },
            ],
            phoneList: [
                [
                    {
                        name: '小米10S',
                        desc: '骁龙870 | 对称式双扬立体声',
                        src: 'https://www.mi.com/mi10s',
                        price: 3299,
                        id:42,
                        img:
                            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3553083a4975325eab6470d94465548.jpg?thumb=1&w=320&h=320&f=webp&q=90',
                    },
                    {
                        name: 'Redmi K40 Pro系列',
                        desc: '骁龙888 / E4 旗舰直屏',
                        src: 'https://www.mi.com/redmik40ultra-k40pro',
                        price: 2799,
                        id:43,
                        img:
                            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=320&h=320&f=webp&q=90',
                    },
                    {
                        name: 'Redmi K40',
                        desc: '骁龙870，新一代 E4 AMOLED旗舰直屏',
                        src: 'https://www.mi.com/redmik40ultra-k40pro',
                        price: 1999,
                        id:44,
                        img:
                            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/73617424da6ff6b64f9c630387bca874.jpg?thumb=1&w=320&h=320&f=webp&q=90',
                    },
                    {
                        name: '小米11',
                        desc: '骁龙888 | 2K四曲面屏',
                        src: 'https://www.mi.com/redmik40ultra-k40pro',
                        price: 3999,
                        id:45,
                        img:
                            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a260090e0e08770b0bd865845a4b4ab.jpg?thumb=1&w=320&h=320&f=webp&q=90',
                    },
                ],
                [
                    {
                        name: '小米10',
                        desc: '骁龙865/1亿像素相机',
                        src: 'https://www.mi.com/redmik40ultra-k40pro',
                        price: 3399,
                        oldPrice: 3999,
                        id:46,
                        img:
                            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=320&h=320&f=webp&q=90',
                    },
                    {
                        name: 'Note 9 Pro',
                        desc: '一亿像素夜景相机，120Hz六档变速高刷屏',
                        src: 'https://www.mi.com/redmik40ultra-k40pro',
                        price: 1599,
                        id:47,
                        img:
                            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e75e528fb468aee107f551179aa0799.jpg?thumb=1&w=320&h=320&f=webp&q=90',
                    },
                    {
                        name: 'Note 9',
                        desc: '天玑 800U处理器，5000mAh电池，',
                        src: 'https://www.mi.com/redmik40ultra-k40pro',
                        price: 1299,
                        id:48,
                        img:
                            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/de2f71a797a74e1ca70f1fb4570bc026.jpg?thumb=1&w=320&h=320&f=webp&q=90',
                    },
                    {
                        name: 'Note 9 4G',
                        desc: '6000mAh长续航',
                        src: 'https://www.mi.com/redmik40ultra-k40pro',
                        price: 999,
                        id:49,
                        img:
                            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13f10e47913f9dc82e6c6a6199f413cd.jpg?thumb=1&w=320&h=320&f=webp&q=90',
                    },
                ],
            ],
            modalVisible: false,
        }
    },
    methods: {
        hideModal() {
            this.modalVisible = false
        },
        goToCart() {
            this.$router.push('/cart')
        },
        addCart(id) {
            this.axios
                .post('/carts', {
                    productId: id,
                    selected: true,
                })
                .then((res) => {
                    this.modalVisible = true
                    this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
                })
                .catch((err) => {
                    this.modalVisible = true
                })
        },
    },
    components: {
        ServiceBar,
        Swiper,
        SwiperSlide,
        Modal,
    },
}
</script>

<style lang="scss" scoped>
@import 'resource/scss/mixin';
@import 'resource/scss/config.scss';

.container {
    display: flex;
    justify-content: center;
    .swiper-box {
        position: relative;
        width: 1226px;
        height: 460px;
        .nav-menu {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 50;
            width: 234px;
            height: 100%;
            background-color: #55585a6c;
            .menu-wrapper {
                padding: 20px 0;
                .menu-item {
                    width: 100%;
                    height: 42px;
                    line-height: 42px;
                    padding-left: 30px;
                    font-size: 14px;
                    box-sizing: border-box;
                    &:hover {
                        background-color: $colorA;
                        .sub-menu {
                            display: flex;
                        }
                    }
                    .sub-menu {
                        position: absolute;
                        display: none;
                        top: 0;
                        left: 234px;
                        height: 460px;
                        overflow: hidden;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                        ul {
                            background-color: #fff;
                            height: 100%;
                            li {
                                &:hover a {
                                    color: $colorA;
                                }
                                a {
                                    width: 225px;
                                    height: 40.66px;
                                    padding: 18px 20px;
                                    color: #333;
                                    display: flex;
                                    img {
                                        margin-right: 12px;
                                    }
                                    .text {
                                        display: inline-block;
                                        line-height: 40px;
                                        width: 172px;
                                    }
                                }
                            }
                        }
                    }
                    &.bgOrange {
                        background-color: $colorA;
                    }
                    a {
                        display: block;
                        position: relative;
                        color: #fff;
                        &::after {
                            content: '';
                            position: absolute;
                            right: 25px;
                            top: 12.5px;
                            width: 7px;
                            height: 13px;
                            @include bgImg('/imgs/icon-arrow.png');
                        }
                    }
                }
            }
        }
        .swiper-container {
            --swiper-navigation-color: rgba(51, 51, 51, 0.158);
            --swiper-navigation-size: 25px;
            --swiper-pagination-color: rgb(206, 206, 206);
            .swiper-pagination {
                width: 400px;
                height: 20px;
                right: 30px;
                left: auto;
                bottom: 20px;
                text-align: right;
                .swiper-pagination-bullet {
                    border: 1px solid #333;
                    opacity: 0.4;
                }
            }
            .swiper-button-prev,
            .swiper-button-next {
                width: 41px;
                height: 69px;
                transform: translate(0, -50%);
                &:hover {
                    background-color: rgba(0, 0, 0, 0.507);
                    color: white;
                }
            }
            .swiper-button-prev {
                left: 234px;
            }
            .swiper-button-next {
                right: 0;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
.ad-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 12px;
    .ad-wrapper {
        padding: 14px 0;
        min-width: $min-width;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            display: inline-block;
            margin-right: 14px;
            &:last-child {
                margin: 0;
            }
        }
    }
}
.home-brick-box {
    .banner {
        width: $min-width;
        padding: 17px 0;
        margin-bottom: 34px;
        img {
            width: 100%;
        }
    }
    min-width: $min-width;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f5;
    padding: 4px 0 50px 0;
    .box-hd {
        height: 58px;
        width: $min-width;
        h2 {
            font-size: 22px;
            font-weight: 200;
            color: #333;
            line-height: 58px;
        }
    }
    .box-bd {
        width: $min-width;
        display: flex;
        .banner-left {
            transition: all 0.5s;
            &:hover {
                box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.06);
                transform: translate(0, -5px);
            }
        }
        .banner-right {
            height: 614px;
            .phone-list {
                display: flex;
                .phone-item {
                    display: inline-block;
                    text-align: center;
                    height: 260px;
                    width: 234px;
                    padding: 20px 0;
                    margin-left: 14px;
                    margin-bottom: 14px;
                    background-color: #fff;
                    transition: all 0.5s;
                    &:hover {
                        box-shadow: 0px 10px 10px 10px rgba(0, 0, 0, 0.06);
                        transform: translate(0, -5px);
                    }
                    .figure {
                        margin: 0 auto 18px;
                    }
                    a {
                        color: #333;
                        .name {
                            font-weight: 400;
                            margin: 0 10px 2px;
                        }
                        .desc {
                            color: #b0b0b0;
                            height: 18px;
                            font-size: 12px;
                            margin: 0 10px 10px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        .price {
                            font-size: 14px;
                            margin: 0 10px 14px;
                            color: $colorA;
                            .old-price {
                                margin-left: 5px;
                                color: #b0b0b0;
                                text-decoration: line-through;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
