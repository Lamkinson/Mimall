<template>
    <div class="nav-bar" :class="{'is-fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                {{title}}
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductParams',
    props:{
        title:String
    },
    data() {
        return {
            isFixed:false
        }
    },
    mounted() {
        window.addEventListener('scroll',this.addFixed)
    },
    methods: {
        addFixed(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.isFixed = scrollTop>210?true:false
        }
    },
    destroyed() {
        window.removeEventListener('scroll',this.addFixed,false)
    },
}
</script>

<style lang="scss">
@import 'resource/scss/config.scss';
@import 'resource/scss/mixin.scss';
.nav-bar {
    height: 70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    display: flex;
    justify-content: center;
    min-width: 1226px;
    width: 100%;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.11);
    background-color: #fff;
    z-index: 50;
    &.is-fixed{
        position: fixed;
        top: 0;
        animation: move .5s;
    }
    @keyframes move {
        from{
            top: -100%;
        }
        to{
            top:0;
        }
        
    }
    .container {
        width: 1226px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pro-title {
            font-size: $fontH;
            color: $colorB;
            font-weight: bold;
        }
        .pro-param {
            font-size: $fontJ;
            span {
                margin: 0 10px;
            }
            a {
                color: $colorC;
            }
        }
    }
}
</style>
