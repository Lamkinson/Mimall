<template>
    <div>
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrapper">
                        <li
                            class="menu-item"
                            v-for="(item, index) in menuList"
                            :key="index"
                            @mouseenter="showMenu(index)"
                            @mouseleave="hideMenu(index)"
                            :class="{ 'bgOrange1': menuVisible[index].show }"
                        >
                            <a href="javascript:;"
                                >{{ item.name }}<span class="icon"></span>
                            </a>
                            <div class="sub-menu" v-show="menuVisible[index].show">
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
                <swiper ref="mySwiper" class="swiper-no-swiping" :options="swiperOption">
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
        <ServiceBar></ServiceBar>
    </div>
</template>

<script>
import ServiceBar from 'components/ServiceBar'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// Import Swiper styles
import 'swiper/css/swiper.css'

export default {
    name: 'index',
    data() {
        return {
            swiperOption: {
                loop:true,
                autoplay: {
                    delay:3000,
                    disableOnInteraction: false,
                },
                effect: 'fade',
                fadeEffect:{
                    crossFade:false
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
            menuVisible: [{
                show:true,
            },{
                show:false,
            },{
                show:false,
            },{
                show:false,
            },{
                show:false,
            },{
                show:false,
            },{
                show:false,
            },{
                show:false,
            },{
                show:false,
            },{
                show:false,
            },{
                show:false,
            },],
            timeOut: [{},{}],
        }
    },
    methods: {
        showMenu(index) {
            if(this.timeOut[index]) clearTimeout(this.timeOut[index])
            this.timeOut[index] = setTimeout(() => {
                //this.menuVisible[index].show=true
            }, 150)
        },
        hideMenu(index) {
            if(this.timeOut[index]) clearTimeout(this.timeOut[index])
            this.timeOut[index] = setTimeout(() => {
                //this.menuVisible[index].show=false
            }, 150)
        },
    },
    components: {
        ServiceBar,
        Swiper,
        SwiperSlide,
    },
}
</script>

<style lang="scss">
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
                    &:hover{
                        background-color: $colorA;;
                        .sub-menu{
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
</style>
