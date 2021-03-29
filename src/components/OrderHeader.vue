<template>
    <div class="order-header">
        <div class="container clearfix">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="title">
                <h2>{{ title }}<slot name="tip"></slot></h2>
            </div>
            <div class="username">
                <a href="javascript:;">{{ username }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'order-header',
    props: {
        title: String,
    },
    computed: {
        username() {
            return this.$store.state.username
        },
    },
}
</script>
<style lang="scss">
@import 'resource/scss/config';
@import 'resource/scss/mixin';

.order-header {
    padding: 30px 0;
    min-width: 1226px;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid $colorA;
    .container {
        width: 1226px;
        .header-logo {
            float: left;
            width: 55px;
            height: 55px;
            background-color: $colorA;
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
        .title,
        .username {
            display: inline-block;
            height: 55px;
            line-height: 55px;
        }
        .title {
            float: left;
            margin-left: 54px;
            h2 {
                font-size: 28px;
                color: #333333;
            }
            span {
                font-size: 14px;
                margin-left: 17px;
                color: #999999;
                font-weight: 200;
            }
        }
        .username {
            float: right;
            a {
                color: #666666;
                font-size: 16px;
            }
        }
    }
}

.clearfix::before,
.clearfix::after {
    content: ' ';
    display: table;
}

.clearfix::after {
    clear: both;
}
</style>
