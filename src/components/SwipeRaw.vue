<template>
    <div class="swipe">
        <div class="swipe-container">
            <div class="img">
                <ul>
                    <li v-for="(pic, index) in picList" :key="index">
                        <img v-show="pic.show" :src="pic.src" />
                    </li>
                </ul>
                <div class="pre-btn"></div>
                <div class="next-btn"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SwipeRaw',
    data() {
        return {
            picList: [
                {
                    show: true,
                    src:
                        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7fd00fa846cefaaa73572ea55832854.jpg?w=2452&h=920',
                },
                {
                    show: false,
                    src:
                        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85fe83512254832000635fb15f048df5.jpg?thumb=1&w=1962&h=736&f=webp&q=90',
                },
                {
                    show: false,
                    src:
                        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aebcb8f7d8c6ddaa754bfbb701a38cbf.jpeg?thumb=1&w=1962&h=736&f=webp&q=90',
                },
                {
                    show: false,
                    src:
                        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e023dd94c146d0f27f7ae8e98213abff.jpg?thumb=1&w=1962&h=736&f=webp&q=90',
                },
                {
                    show: false,
                    src:
                        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f5c49925f3a7d5157b8ac7f4f66b34b.jpg?thumb=1&w=1962&h=736&f=webp&q=90',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import 'resource/scss/config';

.swipe {
    min-width: $min-width;
    height: 460px;
    display: flex;
    justify-content: center;
    .swipe-container {
        width: $min-width;
        .img {
            position: relative;
            li {
                position: absolute;
                top: 0;
                left: 0;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
