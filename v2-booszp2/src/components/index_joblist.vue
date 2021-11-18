<template>
  <div>
    <van-sticky>
      <div class="index_joblist_wrap">
        <van-nav-bar left-text="web前端">    
            <van-icon name="plus" size="18" slot="right" @click="jobStateShowFn"/>
            <van-icon name="search" size="18" slot="right" />
          <!-- <template #right>

          </template> -->
        </van-nav-bar>
      </div>
      <!-- 4个小按钮 -->
      <div class="title_menu">
        <van-button class="miniBtn" size="mini" @click="notifyBtn">推荐</van-button>
        <van-button class="miniBtn" size="mini" @click="notifyBtn">最新</van-button>
        <van-button class="filterBtn" size="mini" @click="openFilterMaskFn">筛选</van-button>
        <van-button class="filterBtn" size="mini" @click="openMaskFn">{{defaultCityName}}</van-button>
      </div>
      <!-- 提示组件notify -->
      <notify v-show="notifyShow"></notify>
    </van-sticky>
    <!-- 职位列表 -->
    <div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <jobItem v-for="(n,inx) in jobsData" 
                :key="inx" 
        :itemObj=n></jobItem>
      </van-pull-refresh>
    </div>
    <!-- 城市操作 wrap touchmove.prevent mousewheel.prevent 禁止鼠标拖动和滚动-->
    <div v-show="is_cityMaskObj" :class="maskClassName" 
    @touchmove.prevent
    @mousewheel.prevent>
      <selectArea @cityMask='closeMaskFn($event)'>
      </selectArea>
    </div>
    <!-- 筛选操作 -->
    <div v-show="is_filterMaskObj" :class="filterClassName"
    @touchmove.prevent
    @mousewheel.prevent>
      <filterWrapObj @filterMask='CloseFilterMaskFn'></filterWrapObj>
    </div>
    <!-- 管理求职意向 jobState组件 -->
    <div v-show="is_JobStateShow" :class="jobStateClassName"
    @touchmove.prevent
    @mousewheel.prevent>
      <jobState @jobStateCloseChildFn='jobStateCloseFn'></jobState>
    </div>
    <!-- footerBar底部导航栏 -->
    <footerBar></footerBar>
  </div>
</template>

<script>
import jobItem from './jobItem.vue'
import footerBar from './footerBar.vue'
import notify from './notify.vue'
import selectArea from './selectArea.vue'
import filterWrapObj from './filterWrapObj.vue'
import jobState from './jobState.vue'
export default {
  name: 'index_joblist',
  data(){
    return{
      msg: 'index_joblist列表组件',
      notifyShow:false,
      isLoading:false,
      is_cityMaskObj:false, //控制城市选择组件包裹wrap的显示隐藏的值
      is_filterMaskObj:false, //控制筛选组件包裹wrap的显示隐藏的值
      is_JobStateShow:false, //控制jobState求职意向组件包裹wrap的显示隐藏的值
      maskClassName:'mask_aaa',//mask_aaa，它的用途，仅用于js找到这个div，没有其它用途
      filterClassName:'mask_filter', //mask_filter，它的用途，仅用于js找到这个div，没有其它用途
      jobStateClassName:'mask_jobState', //mask_jobState，它的用途，仅用于js找到这个div，没有其它用途
      defaultCityName:'城市',
      jobsData:[{
				title:'web前端',
				h2_txt:'什么祥 未融资',
				area:['沈阳 和平区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'5-6K'
			},{
				title:'软件开发工程师',
				h2_txt:'牛万科技 未融资',
				area:['沈阳 沈河区','1-3年','学历不限'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'3-8K'
			},{
				title:'前端工程师',
				h2_txt:'成林健康科技 未融资',
				area:['沈阳 皇姑区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'马xx-从事招聘专员'
				},
				salary:'5-6K'
			},{
				title:'前端开发工程师',
				h2_txt:'师福教育 未融资',
				area:['沈阳 沈河区','3-5年','学历不限'],
				hr:{
					img_avatar:'',
					hr_txt:'杨女士 - 人事'
				},
				salary:'5-8K'
			},{
				title:'前端工程师',
				h2_txt:'成林健康科技 未融资',
				area:['沈阳 皇姑区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'马xx-从事招聘专员'
				},
				salary:'5-6K'
			},{
				title:'前端技术经理',
				h2_txt:'星擎科技 未融资',
				area:['沈阳 铁西区','5-10年','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'潘舒-CEO'
				},
				salary:'6-11K'
			},{
				title:'web前端',
				h2_txt:'什么祥 未融资',
				area:['沈阳 和平区','经验不限','本科'],
				hr:{
					img_avatar:'',
					hr_txt:'海峰-招聘者'
				},
				salary:'5-6K'
			}]
    }
  },
  methods:{
    // 刷新提示
    notifyBtn(){
      this.notifyShow = true;
      console.log(this.notifyShow);
      // 动画结束时的监听
      let _notify = document.querySelector('.notify');
      // console.log(_notify);
      _notify.addEventListener('webkitAnimationEnd',()=>{
        this.notifyShow = false;
      });
    },
    // 下拉刷新方法
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    // 筛选按钮点击事件，控制城市选择组件的显示
    openMaskFn(){
      var _cityMaskWrap = document.querySelector('.mask_aaa');
      _cityMaskWrap.setAttribute('class','mask_aaa cityEditWrapObj_open');
      this.is_cityMaskObj = true;
      _cityMaskWrap.addEventListener('webkitAnimationEnd',()=>{
        this.is_cityMaskObj = true;
      })
    },
    // 城市组件取消按钮，控制城市选择组件的隐藏
    closeMaskFn(_city){
      var _cityMaskWrap = document.querySelector('.mask_aaa');
      _cityMaskWrap.setAttribute('class','mask_aaa cityEditWrapObj_close');
      _cityMaskWrap.addEventListener('webkitAnimationEnd',()=>{
          this.is_cityMaskObj = false;
      })
      // console.log(_city);
      if(_city){
        this.defaultCityName = _city;
      }else{
        this.defaultCityName = '城市';
      }
    },
    // 筛选按钮点击事件
    openFilterMaskFn(){
      this.is_filterMaskObj = true;
      let _filterMask = document.querySelector('.mask_filter');
      _filterMask.setAttribute('class','mask_filter filterWrap_open');
      _filterMask.addEventListener('webkitAnimationEnd',()=>{
        this.is_filterMaskObj=true;
      })
      // console.log(_filterMask);
    },
    // 筛选组件取消按钮，控制筛选组件的隐藏
    CloseFilterMaskFn(){
      var _filterWrap = document.querySelector('.mask_filter');
      _filterWrap.setAttribute('class','mask_filter filterWrap_close');
      // console.log(_filterWrap);
      _filterWrap.addEventListener('webkitAnimationEnd',()=>{
        this.is_filterMaskObj = false;
      })
    },
    // 求职意向组件弹出按钮
    jobStateShowFn(){
      this.is_JobStateShow = true;
      var _jobState = document.querySelector('.mask_jobState ');
      _jobState.setAttribute('class','mask_jobState jobStateWrap_open');
      _jobState.addEventListener('webkitAnimationEnd',()=>{
        this.is_JobStateShow = true;
      })
    },
    // 求职意向组件隐藏按钮
    jobStateCloseFn(){
      var _jobState = document.querySelector('.mask_jobState');
      _jobState.setAttribute('class','mask_jobState jobStateWrap_close');
      _jobState.addEventListener('webkitAnimationEnd',()=>{
        this.is_JobStateShow = false;
      });
      // console.log("xxx");
    }
  },
  // 注册组件
  components:{
    jobItem,footerBar,notify,selectArea,filterWrapObj,jobState
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar_sty{
  background: #14c1bb;
}
.van-icon-plus:before{
  color: #fff;
  font-size: .4rem;
  margin-right: .1rem;
  border-right: 1px solid #c1c1c1;
  padding-right: .1rem;
}
.van-icon-search::before{
  color: #fff;
  font-size: .4rem;
}
.van-nav-bar_text{
  font-size: .35rem;
  color: #fff;
}
.miniBtn{
  border: 0;
  margin: .1rem .1rem 0 .1rem;
  background: #f2f3f5;
}
.filterBtn{
  float: right;
  border: 0;
  margin: .1rem .1rem 0 0;
  background: #f2f3f5;
}
.title_menu{
  background: #fff;
  height: 2rem;
}

.cityEditWrapObj_open{
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;

  animation: cityEditWrapObjAnimation_open .7s;
  animation-fill-mode: forwards; 

}
.cityEditWrapObj_close{
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;

  animation: cityEditWrapObjAnimation_close .7s;
  animation-fill-mode: forwards; 

}
@keyframes cityEditWrapObjAnimation_open{
  from{height:0;}
  to{height:100%;}
}
@keyframes cityEditWrapObjAnimation_close{
  from{height:100%;}
  to{height:0;}
}

.filterWrap_open{
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 10;

    animation: filterWrap_open .7s;
    animation-fill-mode: forwards;
}
.filterWrap_close{
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 10;

    animation: filterWrap_close .7s;
    animation-fill-mode: forwards;
}
@keyframes filterWrap_open{
    from{height:0;}
    to{height:100%}
}
@keyframes filterWrap_close{
    from{height: 100%;}
    to{height:0}
}

/* 求职意向组件样式jobStateWrap */
.jobStateWrap_open{
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  background: #fff;

  animation: jobStateWrapAnimation_open .7s;
  animation-fill-mode: forwards;
}
@keyframes jobStateWrapAnimation_open{
  from{width: 0;}
  to{width: 100%;}
}
.jobStateWrap_close{
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  background: #fff;

  animation: jobStateWrapAnimation_close .7s;
  animation-fill-mode: forwards;
}
@keyframes jobStateWrapAnimation_close{
  from{width: 100%;}
  to{width: 0;}
}
</style>
