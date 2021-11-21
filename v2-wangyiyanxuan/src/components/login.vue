<template>
    <div class="loginWrap">
        <!-- 顶部导航栏 -->
        <div class="listTitleWrap">
            <van-icon name="wap-home-o" size="50" class="listTitleIcon_chat" @click="gotoIndexBtn"/>
            <img src="../assets/logo-img.png" alt="" class="listTitleImg">
            <van-icon name="search" size="50" class="listTitleIcon_search"/>
            <van-icon name="cart-o" size="50" class="listTitleIcon_cart"/>
        </div>
        <div class="logoWrap">
            <!-- 中间的图标 -->
            <img class="wangyiyanxuanImg" src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
            <div class="btnWrap">
                <van-button type="danger" block class="phoneLogin">
                    <i></i>
                    <span class="phoneBtnTxt">手机号快捷登录</span>
                    </van-button>
                <van-button type="brimary" block class="emailLogin" color="#000" plain><i></i>
                    <span class="emailBtnTxt">邮箱账号登录</span>
                    </van-button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"login",
    data(){
        return{
            msg:"login页面",
            goodsInfo:{},
        }
    },
    methods:{
        // 导航栏返回主页面点击按钮
        gotoIndexBtn(){
            this.$router.push('/');
        },
    }
}
</script>
<style scoped>
.loginWrap{
    position: absolute;
    width: 100%;
    /* overflow: hidden; */
}
.listTitleWrap{
    position: relative;
    text-align: center;
    z-index: 1;
}
.listTitleIcon_chat{
    position:absolute;
    top:.2rem;
    left: .2rem;
}
.listTitleImg{
    position:absolute;
    top: .56rem;
    left: 50%;
    transform: translate(-50%, -50%);
    height: .62rem;
}
.listTitleIcon_search{
    position:absolute;
    top:.2rem;
    right: 1.2rem;
}
.listTitleIcon_cart{
    position:absolute;
    top:.2rem;
    right: .2rem;
}
.logoWrap{
    z-index: 2;
    position: relative;
    height: auto;
    width: auto;
    text-align: center;
    margin-top: 2rem;
}
.wangyiyanxuanImg{
    position:absolute;
    top: 1.8rem;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    width: 3.6rem;
}
.btnWrap{
    width: 90%;
    text-align: center;
}

.van-button--block{
    /* position: absolute; */
    top: 3.8rem;
    height: 1.26rem;
    font-size: .37rem;
    margin: .5rem .5rem;
    border-radius: .1rem;
}
.phoneLogin i{
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png");
    width: .8rem;
    height: .5rem;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: .2rem -.68rem;
    position: absolute;
    top: .35rem;
    left: 2.65rem;
    
}
.emailLogin{
    border-color: solid 1px #000;
}
.emailLogin i{
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png");
    width: .8rem;
    height: .5rem;
    display: inline-block;
    background-repeat: no-repeat;
    position: absolute;
    top: .35rem;
    left: 2.9rem;
}
.phoneBtnTxt{
    display: inline-block;
    position: absolute;
    top:.4rem;
    left: 3.5rem;
}
.emailBtnTxt{
    display: inline-block;
    position: absolute;
    top:.4rem;
    left: 3.6rem;
}
</style>