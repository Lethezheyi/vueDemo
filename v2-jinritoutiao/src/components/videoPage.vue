<template>
    <div>
        <!-- 导航栏 -->
        <van-sticky>
        <headerCpt></headerCpt>
        <!-- 标签栏 -->
        <tabWrap></tabWrap>
        </van-sticky>
        <!-- video放映组件 -->
        <div class="videoWrap">
            <!-- 放映组件顶部 -->
            <div class="videoTop">
                <div class="videoWrapTopLeft">
                <img src="https://image.uc.cn/s/nav/g/olps/2018/1/07a2cb3bc2817d8ac20a387cdc713136" alt="">
                <span>乐视笑哈哈</span>
                </div>
                <div class="videoWrapTopRight">
                    <span class="attention">关注</span>
                    <i>...</i>
                </div>
            </div>
            <!-- 放映组件标题 -->
            <div class="videoTitle">UC导航——超快感的上网体验</div>
            <!-- 放映组件播放器 -->
            <div class="videoPlayer">
                <!-- 403错误解决方案 -->
                
                <img src="http://i1.hdslb.com/bfs/archive/8f79e6ea43bea01e534264d8ab47c11a3b9af27a.jpg" alt="">
                <!-- <img src="https://yanxuan.nosdn.127.net/56a5f2efc75a9ac29717047b427ed040.jpg" alt=""> -->
            </div>
            <!-- 放映组件底部按钮 -->
            <div class="videoFooter">
                <van-button icon="share-o" type="default">分享</van-button>
                <van-button icon="star-o" type="default">收藏</van-button>
                <van-button icon="chat-o" type="default">922</van-button>
                <van-button icon="good-job-o" type="default">2.3万</van-button>
            </div>
        </div>
        <!-- 底部导航栏 -->
        <footerCpt></footerCpt>
    </div>
</template>
<script>
import footerCpt from "./footerCpt.vue"
import headerCpt from "./headerCpt.vue"
import tabWrap from "./tabWrap.vue"
export default{
    name:'videoPage',
    data(){
        return{
            msg:"videoPage组件"
        }
    },
    components:{
        footerCpt,headerCpt,tabWrap
    }
}
</script>
<style scoped>
.videoTop{
    height: .6rem;

}
.videoWrapTopLeft{
    display: block;
    float: left;
    padding-left: .2rem;
}
.videoWrapTopLeft span{
    margin-left: .2rem;
}
.videoWrap img{
    float: left;
}
.videoWrap span{
    display: block;
    float: left;
    font-size: .34rem;
    /* height: 36px; */
}
.videoWrapTopRight{
    display: block;
    float: right;
    padding-right: .2rem;

}
.attention{
    float: right;
}
.videoWrapTopRight i{
    font-size: .36rem;
    line-height: .28rem;
    padding: 0 .1rem;
    font-weight: bolder;
}
.videoTitle{
    float: left;
    font-size: .36rem;
    font-weight: bolder;
    margin-left: .2rem;
}
.videoPlayer img{
    width: 100%;
    height: auto;
}


</style>