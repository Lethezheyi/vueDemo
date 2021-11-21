<template>
    <div class="footer_div" >
        <van-tabbar 
        v-model="active" 
        active-color="#f00"
        @change="onFooterBarBtnFn">
            <van-tabbar-item v-for="(n,inx) in footerBar_valArr" :key="inx" :to="n.pageRoute">
            <span>{{n.txt}}</span>
            <template #icon="props">
                <div :class="props.active ? n.icon.a : n.icon.a1">
                </div>
            </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default{
    name:'footerBar',
    data(){
        return{
            msg:'footerBar组件，底部标签栏',
            active:0,
            footerBar_valArr:[
                {
                txt:'首页',
                icon: {//footerBar图标
                    a: 'footerIcon footerIcon_1',
                    a1: 'footerIcon footerIcon_1_red'
                    },
                pageRoute:'/'
                },
                {
                txt:'分类',
                icon: {//footerBar图标
                    a: 'footerIcon footerIcon_2',
                    a1: 'footerIcon footerIcon_2_red'
                    },
                pageRoute:'/cateList'
                },
                {
                txt:'值得买',
                icon: {//footerBar图标
                    a: 'footerIcon footerIcon_3',
                    a1: 'footerIcon footerIcon_3_red'
                    },
                pageRoute:'/topic'
                },
                {
                txt:'购物车',
                icon: {//footerBar图标
                    a: 'footerIcon footerIcon_4',
                    a1: 'footerIcon footerIcon_4_red'
                    },
                pageRoute:'/cart'
                },
                {
                txt:'个人',
                icon: {//footerBar图标
                    a: 'footerIcon footerIcon_5',
                    a1: 'footerIcon footerIcon_5_red'
                    },
                pageRoute:'/login'
                }
            ]
        }
    },
    // mounted，vue生命周期函数，页面刚加载时执行
    mounted(){
        // 获取footerBar组件的索引值，并赋值给当前选中的标签栏,因为localStorage将索引值存储为string进行保存，所以需要使用Number函数来转换数据类型
        this.active=Number(localStorage.getItem('save_inx'));
        // console.log(this.active);
    },
    // watch:{
    //     active(){
    //         this.active = localStorage.getItem('save_inx');
    //     }
    // },
    methods:{
        // 底部标签栏点击事件
        onFooterBarBtnFn(_inx){
            // 使用html5的localStorage保存索引，保存后，_inx的类型会从Number变成string
            // console.log(_inx);
            // console.log(typeof _inx);
            localStorage.setItem('save_inx',_inx);
        }
    }
}
</script>

<style scoped>
/* footer icon的样式 */
.footerIcon{
  width: .53rem;
  height: .53rem;
  margin: 0 auto;
  background-image: url(../assets/wangyiyanxuan_spireIcon.png);
  background-size:auto;
  background-repeat: no-repeat;
}
.footerIcon_1{
  background-position: -83px 0;
}
.footerIcon_1_red{
  background-position: -83px -42px;
}
.footerIcon_2{
  background-position: 0 -38px;
}
.footerIcon_2_red{
  background-position: -42px -38px;
}
.footerIcon_3{
  background-position: 0px -84px;
}
.footerIcon_3_red{
  background-position: -42px -84px;
}
.footerIcon_4{
  background-position: 0px 0;
}
.footerIcon_4_red{
  background-position: -42px 0 ;
}
.footerIcon_5{
  background-position: -83px -84px;
}
.footerIcon_5_red{
  background-position: -125px 0;
}
</style>