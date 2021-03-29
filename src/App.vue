<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        if (this.$cookie.get('userId')) {
            this.getUser()
            this.getCartCount()
        }
    },
    methods: {
        getUser() {
            this.axios.get('/user').then((res = {}) => {
                this.$store.dispatch('saveUsername', res.username)
            })
        },
        getCartCount() {
            this.axios.get('/carts/products/sum').then((res = {}) => {
                this.$store.dispatch('saveCartCount', res)
            })
        },
    },
}
</script>

<style lang="scss">
@import 'resource/scss/reset.scss';
@import 'resource/scss/Modal.scss';
@import 'resource/scss/button.scss';
</style>
