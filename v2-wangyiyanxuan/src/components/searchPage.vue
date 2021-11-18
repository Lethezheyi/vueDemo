<template>
    <div class="title_div">
        <!-- 两端对齐 -->
        <van-row type="flex" justify="space-between">
            <van-col span="16" class="title_left">
                <div class="title_leftWrap">
                    <van-cell-group>
                        <van-field 
                        v-model="value" 
                        placeholder="至臻·虚空之女" 
                        class="searchField"/>
                        <van-icon name="search" class="searchIcon"/>
                        <van-icon 
                            name="close" 
                            class="cancelIcon" 
                            @click="cancelSearchBtnFn"
                            v-show="is_cancelIconShow"/>
                    </van-cell-group>
                </div>
            </van-col>
            <van-col span="4">
                <van-button type="primary" class="cancelBtnCls" to="/">取消</van-button>
            </van-col>
        </van-row>   
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'searchPage',
    data(){
        return{
            msg:'searchPage组件',
            value:'',
            is_cancelIconShow:false
        }
    },
    watch:{
        // 函数名为你需要监听的值，这里的value函数，就表示对value这个值进行监听，当value的值为''时，is_cancelIconShow的值为false；当value不为''时，is_cancelIconShow的值为true
        value(){
            if(this.value ==''){
                this.is_cancelIconShow=false;
            }else{
                this.is_cancelIconShow=true;
            }
        }
    },
    // vue生命周期created,在页面所有内容生成完毕后执行
    created(){
        axios.get('http://localhost:3344/aaa')
                    .then(_d=>{
                        console.log(_d.data);
                    })
    },
    methods:{
        // 清空查询框按钮点击事件
        cancelSearchBtnFn(){
            this.value='';
            this.is_cancelIconShow=false;
        },
        
    },
}
</script>

<style scoped>
/* 取消按钮cancelBtnCls样式 */
.title_div .cancelBtnCls{
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
  top: -0.13rem;
}
/* 导航栏左侧search样式 */
.title_left{
  font-size: .3rem;
  top: .26rem;
  
}
/* 导航栏左侧包裹样式 */
.title_leftWrap{
  width: 8rem;
  height: 1rem;
  text-align: center;
  position: relative;
  top: 0.26rem;
  background: #ededed;
  border-radius: .1rem;
  color: #666666;
  left: .45rem;
}
/* 导航栏搜索图标样式 */
.title_leftWrap .searchIcon{
    position: absolute;
    display: inline-block;
    font: normal normal normal 14px/1 vant-icon;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    left: .2rem;
    font-size: .5rem;
    top: .1rem;
}
/* 导航栏搜索输入框样式 */
.title_leftWrap .searchField{
    position: absolute;
    left: .8rem;
    top: .08rem;
    font-size: .37rem;
    background-color: #ededed;
    left: .6rem;
    width: 6.8rem;
}
/* 导航栏清空搜索文本框按钮样式 */
.title_leftWrap .cancelIcon{
    position: absolute;
    top: .22rem;
    font-size: .37rem;
    background-color: #ededed;
    right: .24rem;
}
</style>