<template>
  <div class="title_div">
    <van-row type="flex" justify="center">
      <van-col span="4" class="title_left">
          <img src="../assets/logo-img.png" alt="">
      </van-col>
      <van-col span="12" class="title_middle" @click='gotoSearchFn'>
        <searchBtn></searchBtn>
      </van-col>
      <van-col span="2" class="title_right">
          <van-button type="primary" class="loginBtnCls">登录</van-button>
      </van-col>
    </van-row>
    

    <!-- tab标签，暂时有问题，效果失效 -->
    <div class="tabWrap">
      <van-tabs>
        <van-tab v-for="(n,inx) in tabBtn_value" :title="n" :key="inx">
        </van-tab>
      </van-tabs>
    </div>

    <!-- 轮播图 -->
    <div class="slideWrap">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(n,inx) in swipe_imgArr" :key="inx">
          <img :src="n" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 首页服务索引模块 m-indexServicePolicy -->
    <div class="m-indexServicePolicy">
      <ul>
        <li><i style="background: url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png); background-size: 100% 100%;"></i> 网易自营品牌</li>
        <li><i style="background: url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png); background-size: 100% 100%;"></i> 30天无忧退货</li>
        <li><i style="background: url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png); background-size: 100% 100%;"></i> 48小时快速退款</li>
      </ul>
    </div>

    <!-- 首页产品展示 -->
    <div class="goodsColumn_Wrap">
      <van-grid :column-num="5">
        <van-grid-item 
        class="goodsColumn_item"
        v-for="(n,inx) in goodsColumn_arr" 
        :key="inx" 
        :icon="n.img_url" 
        :text="n.img_txt" />
      </van-grid>
    </div>
    <div class="countDownWrap">
      <span>限时购</span>
      <van-count-down 
      :time="time"
      ref="countDown">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <a href="" class="countDownMore">更多>></a>
    </div>
      <div class="goodsColumn_Wrap countDownProductWrap">
        <van-grid :column-num="3">
          <van-grid-item v-for="(n,inx) in goodsListObj" 
          class="goodsColumn_item"
          :key="inx" 
          :icon="n.img_url" 
          :text="n.img_txt" />
        </van-grid>
      </div>
    <footerBar style="z-index:100;"></footerBar>
  </div>
</template>

<script>
import axios from "axios";
import searchBtn from './searchBtn.vue'
import footerBar from './footerBar.vue'
export default {
  name: 'indexWrap',
  data(){
    return{
      msg: '网易严选vant + vue',
      tabBtn_value:[], //tab标签栏组件文字
      swipeableValue:true,
      swipe_imgArr:[],
      goodsColumn_arr:[
        {
          img_url:'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png',
          img_txt:'新品首发'
        },{
          img_url:'http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
          img_txt:'居家生活'
        },{
          img_url:'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png',
          img_txt:'服饰鞋包'
        },{
          img_url:'http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png',
          img_txt:'美食酒水'
        },{
          img_url:'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png',
          img_txt:'个护清洁'
        },{
          img_url:'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png',
          img_txt:'母婴亲子'
        },{
          img_url:'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png',
          img_txt:'运动旅行'
        },{
          img_url:'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png',
          img_txt:'数码家电'
        },{
          img_url:'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png',
          img_txt:'全球特色'
        },{
          img_url:'http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif',
          img_txt:'好货抄底'
        }
      ], //首页产品展示组件数组
      goodsListObj:[{
          img_url:'https://yanxuan-item.nosdn.127.net/e78096b543cc65af16da3a93cacb4071.png?quality=75&type=webp&imageView&thumbnail=216x216',
          img_txt:'￥219'
        },{
          img_url:'https://yanxuan-item.nosdn.127.net/570e762763536175b9ec226c0d93a7cd.png?quality=75&type=webp&imageView&thumbnail=216x216',
          img_txt:'￥167'
        },{
          img_url:'https://yanxuan-item.nosdn.127.net/f3f18a4fe9e7905cd7c9ff28e42ff0c2.png?quality=75&type=webp&imageView&thumbnail=216x216',
          img_txt:'￥50.2'
        },{
          img_url:'https://yanxuan-item.nosdn.127.net/0b05c22b99e8fc2cf3015e4bbb8d7c3f.png?quality=75&type=webp&imageView&thumbnail=216x216',
          img_txt:'￥139'
        },{
          img_url:'https://yanxuan-item.nosdn.127.net/ec55e5314bfd670320c3c15ce5e0b095.png?quality=75&type=webp&imageView&thumbnail=216x216',
          img_txt:'￥42.8'
        },{
          img_url:'https://yanxuan-item.nosdn.127.net/f815bf4d31ece0500089d69475c2014c.png?quality=75&type=webp&imageView&thumbnail=216x216',
          img_txt:'￥249'
        }],//限时购模拟数据
      time:60*60*60*1000, //CountDown 计时器组件 限时购
      timeData:[
        {days:1},
        {hours:24},
        {minutes:60},
        {seconds:60},
        {milliseconds:6000}
      ]
    }
  },
  created(){
    // console.log("xxx");
    axios.get('http://localhost:3344/get_tabBtn_list')
            .then(_d=>{
              // console.log(_d.data);
              this.tabBtn_value = _d.data.slice(0,5);
            });
    // 轮播图
    axios.get('http://localhost:3344/get_swipe_img')
            .then(_d=>{
              this.swipe_imgArr = _d.data;
            })
  },
  methods:{
    // 顶部搜索框点击跳转到search搜索组件
    gotoSearchFn(){
        this.$router.push('searchPage');
    },
    start(){
      this.$refs.countDown.start();
    },

  },
  // 注册组件
  components:{
    footerBar,searchBtn
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 首页顶部导航栏 */
.title_div{
  width: 100%;
  height: auto;
  top: -.1rem;
  margin-bottom: .5rem;
}
.title_left{
  width: auto;
  height: 0.6rem;
  left: .377rem;
  top: .347rem;
  position: absolute;
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
/* tabBtnWrap tab标签栏选项卡样式 */
.tabWrap{
  color: #000;
}
.tabBtnWrap{
  font-size: .4rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 5rem;
  text-align: center;
  
}
.my-swipe .van-swipe-item img{
  width: 100%;
  height: 100%;
}
.m-indexServicePolicy{
  /* background: #f0f; */
  width: 100%;
}
.m-indexServicePolicy ul{
  height: 0.72rem;
  padding: 0 .3rem;
  display: flex;
  align-items: center;
}
.m-indexServicePolicy ul li{
  font-size: .32rem;
  -webkit-box-flex: 1;
  flex: 1;
  float: left;
}
.m-indexServicePolicy ul li i{
  background-position: 50%;
  width: 0.32rem;
  height: 0.32rem;
  display: inline-block;
  
}
/* 宫格组件样式goodsColumn_Wrap */
/* .goodsColumn_Wrap{

} */
.goodsColumn_Wrap .goodsColumn_item{
    width: 2rem;
    height: 2.2rem;
    object-fit: contain;
}
/* 限时购倒计时组件样式 */
.countDownWrap{
  line-height: 1.33rem;
  padding: 0 .4rem;
  background: #fff;
  overflow: hidden;
  /* margin-top: .35rem; */
  position: relative;
}
.countDownWrap > span{
  font-size: .47rem;
  font-weight: bold;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.countDownMore{
  float: right;
  font-size: .34rem;
  position: absolute;
  right: .4rem;
  top: .26rem;
}
.countDownProductWrap{
  padding: 0 .2rem;
}

</style>
