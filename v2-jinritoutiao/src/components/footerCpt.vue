<template>
    <div class="footerCptWrap">
        <van-tabbar v-model="active" @change="pageChangeFn">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">视频</van-tabbar-item>
            <van-tabbar-item icon="friends-o">放映厅</van-tabbar-item>
            <van-tabbar-item icon="setting-o">未登录</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default{
    name:"footerCpt组件",
    data(){
        return{
            msg:"footerCpt组件",
            active:0 //footerBar默认选中标签

        }
    },
    created(){
        // 在页面生成前重新获取active的值
        this.active = Number(localStorage.getItem('saveInx'));
    },
    methods:{
        // 点击切换页面
        pageChangeFn(_pageInx){
            console.log(_pageInx);
            localStorage.setItem('saveInx',_pageInx);
            if(_pageInx === 0 ){
                this.$router.push('/');
            }else if(_pageInx === 1){
                this.$router.push('/videoPage');
            }else if(_pageInx === 2){
                this.$router.push('/screeningRoom');
            }else{
                this.$router.push('/mine');
            }
        }
    }
}
</script>
<style scoped>

</style>