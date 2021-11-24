<template>
  <div class="indexWrap">
    <!-- 导航栏 -->
    <van-sticky>
      <headerCpt></headerCpt>
      <!-- 标签栏 -->
      <tabWrap></tabWrap>
    </van-sticky>
    <!-- list列表栏 -->
    <listWrap></listWrap>
    <!-- 底部导航栏 -->
    <footerCpt></footerCpt>
    
  </div>
    
</template>

<script>
import headerCpt from '../components/headerCpt'
import footerCpt from '../components/footerCpt'
import listWrap from '../components/listWrap'
import tabWrap from '../components/tabWrap'
import axios from 'axios'

export default {
    name: "index",
    data() {
        return {
            msg: "index组件",
            value: "",
            titleBarValue:[],//tabWrap组件的标题内容
            atricleValue:{} //listWrap组件的文章内容
        };
    },
    created(){
      // 获取tab组件的值
      function getTabVauleFn(){
        return axios.get("http://localhost:3344/tab_title");
      }
      // 获取listWrap组件的内容
      function getArticleValueFn(){
        return axios.get("http://localhost:3344/list_detail");
      }
      function getBiliBiliDingFn(){
        // https://www.bilibili.com/index/ding.json
        return axios.get('/index/ding.json')
      }
      // 编写并发请求
      // axios.all([getTabVauleFn(),getArticleValueFn()])
      axios.all([getTabVauleFn(),getArticleValueFn(),getBiliBiliDingFn()])
              .then(results=>{
                // 返回一个数组
                // console.log(results[2]);
                this.titleBarValue = results[0].data;
                // console.log(this.titleBarValue);
                this.atricleValue = results[1].data;
              })
      // 请求B站数据接口,直接请求会提示跨域错误，需要使用代理服务器
    },
    methods: {
        // 查询按钮点击事件
        onSearch() {
            console.log("xxx");
        }
    },
    components: { headerCpt,footerCpt,listWrap,tabWrap }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
