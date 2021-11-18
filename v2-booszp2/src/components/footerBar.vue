<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">职位</van-tabbar-item>
            <van-tabbar-item icon="search">公司</van-tabbar-item>
            <van-tabbar-item icon="friends-o">消息</van-tabbar-item>
            <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default{
    name:'footerBar',
    data(){
        return{
            msg:'footerBar组件',
            active:3
        }
    }
}
</script>
<style scoped>
</style>