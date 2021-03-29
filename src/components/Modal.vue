<template>
    <transition name="slide">
        <div class="modal" v-show="modalVisible">
            <div class="mask"></div>
            <div class="dialog">
                <div class="modal-header">
                    <span>{{title}}</span>
                    <a href="javascript:;" class="icon-close" @click="cancel"></a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <div class="btn-group">
                        <a
                            href="javascript:;"
                            class="btn"
                            v-if="btnType === 1 || btnType === 3" @click="submit"
                            >{{ confirmText }}</a
                        >
                        <a
                            href="javascript:;"
                            class="btn btn-default"
                            v-if="btnType > 1" @click="cancel"
                            >{{ cancelText }}</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        modalType: {
            type: String,
            default: 'form', //'small' 'middle' 'large'
        },
        title: String,
        btnType: Number, //1 确定 2 取消 3 取消确定
        confirmText: {
            type: String,
            default: '确定',
        },
        cancelText: {
            type: String,
            default: '取消',
        },
        modalVisible: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        cancel(){
            this.$emit('cancel')
        },
        submit(){
            this.$emit('submit')
        }
    },
}
</script>
