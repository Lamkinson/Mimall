<template>
    <div class="order-pay">
        <Loading></Loading>
        <div class="form" v-html="content"></div>
    </div>
</template>

<script>
import Loading from 'components/Loading'

export default {
    name:'Alipay',
    data() {
        return {
            orderId:this.$route.query.orderId,
            content:0,
            Loading:true
        }
    },
    mounted() {
        this.paySubmit()
    },
    methods: {
        paySubmit(){
            this.axios.post('/pay',{
                orderId:this.orderId,
                orderName:'santi的小米商城',
                amount:0.01,
                payType:1
            }).then((res)=>{
                this.content = res.content
                setTimeout(()=>{
                    document.forms[0].submit()
                },100)
            })
        }
    },
    components:{
        Loading
    }
}
</script>