<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>预约维修服务</li>
                <li><span class="icon-7day"></span>7天无理由退货</li>
                <li><span class="icon-15day"></span>15天免费换货</li>
                <li><span class="icon-post"></span>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'service-bar',
}
</script>
<style lang="scss">
@import 'resource/scss/mixin.scss';
@import 'resource/scss/config.scss';
.service {
    padding: 33px 0;
    color: #666666;
    font-size: 16px;
    min-width: $min-width;
    display: flex;
    justify-content: center;

    .container {
        width: $min-width;
        ul {
            width: 100%;
            display: flex;
            justify-content: center;
            li {
                flex: 1;
                display: inline-block;
                text-align: center;
                border-right: 1px solid #e5e5e5;
                &:last-child {
                    border: none;
                }
                span {
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    vertical-align: middle;
                    margin-right: 8px;
                }
                .icon-setting {
                    @include bgImg('/imgs/icon-setting.png');
                }
                .icon-7day {
                    @include bgImg('/imgs/icon-7day.png');
                    background-size: 24px 24px;
                }
                .icon-15day {
                    @include bgImg('/imgs/icon-15day.png');
                    background-size: 24px 24px;
                }
                .icon-post {
                    @include bgImg('/imgs/icon-post.png');
                    background-size: 24px 24px;
                }
            }
        }
    }
}
</style>
