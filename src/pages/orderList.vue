<template>
    <div class="order-list">
        <div class="wrapper">
            <div class="container">
                <div class="order-box">
                    <Loading v-if="loading"></Loading>
                    <div class="order" v-for="(order, index) in list" :key="index">
                        <div class="order-title">
                            <div class="item-info fl">
                                {{ order.createTime }}
                                <span>|</span>
                                {{ order.receiverName }}
                                <span>|</span>
                                订单号：{{ order.orderNo }}
                                <span>|</span>
                                {{ order.paymentTypeDesc }}
                            </div>
                            <div class="item-money fr">
                                <span>应付金额：</span>
                                <span class="money">{{ order.payment }}</span>
                                <span>元</span>
                            </div>
                        </div>
                        <div class="order-content clearfix">
                            <div class="good-box fl">
                                <div class="good-list" v-for="(item, i) in order.orderItemVoList" :key="i">
                                    <div class="good-img">
                                        <img v-lazy="item.productImage" alt="" />
                                    </div>
                                    <div class="good-name">
                                        <div class="p-name">{{ item.productName }}</div>
                                        <div class="p-money">{{ item.totalPrice }}元 X {{ item.quantity }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="good-state fr" v-if="order.status == 20">
                                <a href="javascript:;">{{ order.statusDesc }}</a>
                            </div>
                            <div class="good-state fr" v-else>
                                <a href="javascript:;" @click="goPay(order.orderNo)">{{ order.statusDesc }}</a>
                            </div>
                        </div>
                    </div>
                    <div
                        class="scroll-more"
                        v-infinite-scroll="loadMore"
                        infinite-scroll-disabled="busy"
                        infinite-scroll-distance="10"
                        >
                        <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="scrollLoading" />
                    </div>
                    <NoData v-if="!loading && list.length == 0"></NoData>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Loading from 'components/Loading'
import NoData from 'components/NoData'
import infiniteScroll from 'vue-infinite-scroll'

export default {
    name: 'order-list',
    components: {
        Loading,
        NoData,
    },
    directives: {
        infiniteScroll,
    },
    data() {
        return {
            loading: true,
            scrollLoading: false,
            list: [],
            pageSize: 10,
            pageNum: 1,
            total: 0,
            busy: true, //默认繁忙 是否加载滚动 false:开启
        }
    },
    mounted() {
        this.getOrderList()
    },
    methods: {
        getOrderList() {
            this.axios
                .get('/orders', {
                    params: {
                        pageSize: this.pageSize,
                        pageNum: this.pageNum,
                    },
                })
                .then((res) => {
                    this.busy = false
                    this.loading = false
                    this.list = this.list.concat(res.list)
                })
                .catch(() => {
                    this.loading = false
                })
        },
        loadMore() {
            this.busy = true
            setTimeout(() => {
                this.pageNum++
                this.getScrollList()
            }, 500)
        },
        getScrollList() {
            this.scrollLoading = true
            this.axios
                .get('/orders', {
                    params: {
                        pageSize: this.pageSize,
                        pageNum: this.pageNum,
                    },
                })
                .then((res) => {
                    this.scrollLoading = false
                    this.list = this.list.concat(res.list)
                    if (res.hasNextPage) {
                        this.busy = false
                    } else {
                        this.busy = true
                    }
                })
        },
        goPay(orderNo) {
            // 三种路由跳转方式
            // this.$router.push('/order/pay')
            /*this.$router.push({
          name:'order-pay',
          query:{
            orderNo
          }
        })*/
            this.$router.push({
                path: '/order/pay',
                query: {
                    orderNo,
                },
            })
        },
    },
}
</script>
<style lang="scss" scoped>
@import 'resource/scss/config.scss';
@import 'resource/scss/mixin.scss';
.order-list {
    .wrapper {
        background-color: $colorJ;
        padding-top: 33px;
        padding-bottom: 110px;
        display: flex;
        justify-content: center;
        .container {
            width: 1226px;
            .order-box {
                .order {
                    border: 1px solid $colorF;
                    background-color: $colorG;
                    margin-bottom: 31px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .order-title {
                        height: 74px;
                        line-height: 74px;
                        background-color: $colorK;
                        padding: 0 43px;
                        font-size: 16px;
                        color: $colorC;
                        .item-info {
                            span {
                                margin: 0 9px;
                            }
                        }
                        .money {
                            font-size: 26px;
                            color: $colorB;
                        }
                    }
                    .order-content {
                        padding: 0 43px;
                        .good-box {
                            width: 88%;
                            .good-list {
                                display: flex;
                                align-items: center;
                                height: 145px;
                                .good-img {
                                    text-align: center;
                                    width: 112px;
                                    img {
                                        width: 100%;
                                    }
                                }
                                .good-name {
                                    font-size: 20px;
                                    color: $colorB;
                                }
                            }
                        }
                        .good-state {
                            height: 145px;
                            line-height: 145px;
                            font-size: 20px;
                            color: $colorA;
                            a {
                                color: $colorA;
                            }
                        }
                    }
                }
            }
        }
    }
}

.fr {
    float: right;
}

.fl {
    float: left;
}

.clearfix::before,
.clearfix::after {
    content: ' ';
    display: table;
}

.clearfix::after {
    clear: both;
}

.scroll-more {
    text-align: center;
}
</style>
