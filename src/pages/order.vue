<template>
    <div>
        <OrderHeader :title="title">
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </OrderHeader>
        <router-view></router-view>
        <ServiceBar></ServiceBar>
        <NavFooter></NavFooter>
    </div>
</template>

<script>
import OrderHeader from 'components/OrderHeader'
import NavFooter from 'components/NavFooter'
import ServiceBar from 'components/ServiceBar'

export default {
    name:'Order',
    beforeRouteUpdate(to, from, next){
        if(to.name === 'order-confirm'){
                this.title = '订单确认'
                this.tip = '请认真填写收货地址'
        }else if(to.name === 'order-pay'){
                this.title = '订单支付'
                this.tip = '请谨防钓鱼链接或诈骗电话'
            }else if (to.name ==='order-list'){
                this.title = '订单列表'
                this.tip = '请谨防钓鱼链接或诈骗电话'
            }
        next()
    },
    data() {
        return {
            title:'',
            tip:''
        }
    },
    mounted() {
        this.initHeader()
    },
    methods: {
        initHeader(){
            const path = this.$route.path
            if(path === '/order/confirm'){
                this.title = '订单确认'
                this.tip = '请认真填写收货地址'
            }else if (path === '/order/list'){
                this.title = '订单列表'
                this.tip = '请谨防钓鱼链接或诈骗电话'
            }else if (path === '/order/pay'){
                this.title = '订单支付'
                this.tip = '请谨防钓鱼链接或诈骗电话'
            }
        }
    },
    components:{
        OrderHeader,
        NavFooter,
        ServiceBar
    }
}
</script>