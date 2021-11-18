<template>
  <div class="body_sty">
    <!-- 轮播图 -->
      <van-swipe class="loginMask" :autoplay="3000" indicator-color="red" :show-indicators='false'>
        <van-swipe-item class="loginMaskImg loginBg_1"></van-swipe-item>
        <van-swipe-item class="loginMaskImg loginBg_2"></van-swipe-item>
        <van-swipe-item class="loginMaskImg loginBg_3"></van-swipe-item>
      </van-swipe>
    <van-button type="primary" class="loginMaskBtn1">我要招人</van-button>
    <van-button type="primary" class="loginMaskBtn2" to='index_joblist'>我要应聘</van-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      msg: '高仿BOSS直聘项目',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body_sty{
  height: 100%;
}
/* 整个轮播图容器的css样式loginMask */
.loginMask{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
}
.loginMaskImg{
  width: 100%;
  height: 100%;
}
.loginBg_1{
  background-image: url('../assets/loginMask/1.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.loginBg_2{
  background-image: url('../assets/loginMask/2.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.loginBg_3{
  background-image: url('../assets/loginMask/3.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}
.loginMaskBtn1{
  z-index: 5;
  position: absolute;
  bottom: 9rem;
  left: 5rem;
}
.loginMaskBtn2{
  z-index: 5;
  position: absolute;
  bottom: 9rem;
  right: 5rem;
}
</style>
