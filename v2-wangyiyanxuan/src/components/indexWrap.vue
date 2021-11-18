<template>
  <div class="title_div">
    <van-row type="flex" justify="center">
      <van-col span="4" class="title_left">
        <img src="../assets/logo-img.png" alt="">
      </van-col>
      <van-col span="12" class="title_middle" @click='gotoSearchFn'>
        <div class="title_middleWrap">
          <van-icon name="search" class="searchIcon"/>
          <span class="searchSpan">搜索商品, 共119918款好物</span>
        </div>
      </van-col>
      <van-col span="2" class="title_right">
        <van-button type="primary" class="loginBtnCls">登录</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'indexWrap',
  data(){
    return{
      msg: '网易严选vant + vue'
    }
  },
  methods:{
    // 顶部搜索框点击跳转到search搜索组件
    gotoSearchFn(){
      this.$router.push('searchPage');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title_div{
  width: 100%;
  height: auto;
  top: -.1rem;
}
.title_left{
  width: auto;
  height: 0.6rem;
  left: .377rem;
  top: .347rem;
  position: absolute;
}
.title_middleWrap{
  width: 5.8rem;
  height: .8rem;
  text-align: center;
  position: relative;
  top: 0.26rem;
  background: #ededed;
  border-radius: .1rem;
  color: #666666;
}
.title_middle{
  font-size: .3rem;
  top: .26rem;
  
}
.title_right{
  position: absolute;
  right: .8rem;
  top: -0.16rem;
  font-size: 1rem;
}
.title_right .loginBtnCls{
  width: 1rem;
  height: .6rem;
  line-height: .4rem;
  text-align: center;
  color: #dd1a21;
  background-color: #fff;
  border: 1.8px solid #dd1a21;
  border-radius: 0.12rem;
  margin-left: 0.16rem;
  font-size: .276rem;
  padding-top: .16rem;
}

.title_middle .searchIcon {
    position: absolute;
    top: .2rem;
    left: .3rem;
    font-size: .5rem;
}
.title_middle span {
    font-size: .377rem;
    top: .16rem;
    position: absolute;
    left: .8rem;
}
</style>
