<template>
    <div class="jobState">
        <van-nav-bar
            title="求职状态"
            left-text="返回"
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            />
            <h1 class="titleSty">管理求职意向</h1>
            <!-- 切换求职状态按钮 -->
            <van-nav-bar
                left-text="求职状态"
                :right-text="jobStateBtnTxt"
                @click-right="openJobStateFn"
                />

        <!-- 求职状态的列表，从下向上升起 -->
        <van-action-sheet :actions="actions" @select="onSelect" 
                        v-model="is_jobStateShow"/>
        <!-- 切换求职状态按钮 -->
        <van-nav-bar
            left-text="求职期望"
            />
        <p class="div_p">求职期望的不同，推荐的职位也会不同</p>
        <!-- 分割线 -->
        <van-divider />
        <van-button type="primary">添加期望</van-button>
    </div>
</template>
<script>
export default{
    name:'jobState',
    data(){
        return{
            msg:'jobState组件',
            is_jobStateShow: false,
            jobStateBtnTxt:'请选择>>',
            actions: [
                { name: '离职-随时到岗' ,is_state:0}, 
                { name: '在职-月内到岗' ,is_state:1}, 
                { name: '在职-考虑机会' ,is_state:2}, 
                { name: '在职-暂不考虑' ,is_state:3}, 
                ],
        }
    },
    methods:{
        // 返回按钮,用于隐藏jobState组件
        onClickLeft(){
            this.$emit('jobStateCloseChildFn');
        },
        // 请选择按钮，用于显示jobState子页面
        openJobStateFn(){
            this.is_jobStateShow=true;
        },
        onSelect(item) {
            // 默认情况下点击选项时不会自动收起
            // 可以通过 close-on-click-action 属性开启自动收起
            this.is_jobStateShow = false;
            // this.$toast(item.name);
            this.jobStateBtnTxt = item.name;

        },
    }
}
</script>

<style scoped>
.titleSty{
    font-size: 1rem;
    font-weight: bold;
    margin-left: .3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.div_p{
    font-size: .1rem;
    color: #969696;
    margin-left: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
}
.jobState{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}
.jobState_footer{
    text-align: center;
    margin: 2rem 0;
}

</style>