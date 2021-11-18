<template>
    <div class="notify">
        <!-- loading 加载转菊花 -->
        <van-loading type="spinner" size="12"> <h1>已刷新</h1></van-loading>
    </div>
</template>
<script>
export default{
    name:'notify',
    data(){
        return{
            msg:'notify组件更新'
        }
    }
}
</script>
<style scoped>
.notify{
    top: 3rem;
    width: 100%;
    height: 1rem;
    background: #14c1bb;
    text-align: center;
    line-height: 1rem;
    color: #fff;
    font-size: .21rem;

    animation:notify_show .5s;
    animation-delay: 1.5s; 
    /* 使动画停留在最后一帧 */
    animation-fill-mode: forwards;  
}
@keyframes notify_show{
    from{height: .5rem;}
    to{height: 0;}
}
</style>