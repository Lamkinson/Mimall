<template>
    <div>
        <OrderHeader></OrderHeader>
        Cart
        <NavFooter></NavFooter>
    </div>
</template>

<script>
import OrderHeader from 'components/OrderHeader'
import NavFooter from 'components/NavFooter'

export default {
    name:'Cart',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>