<template>
    <div class="filterWrap">
        <van-icon name="cross" color="#f0f" @click="filterWrapCloseFn"/>
        <div class="gridTitle">
            学历要求
        </div>
        <van-grid :gutter="10" :column-num="3">
            <van-grid-item @click="itemBtnClick($event)"  text="全部" />
            <van-grid-item @click="itemBtnClick($event)"  text="博士" />
            <van-grid-item @click="itemBtnClick($event)"  text="研究生" />
            <van-grid-item @click="itemBtnClick($event)"  text="本科" />
            <van-grid-item @click="itemBtnClick($event)"  text="大专" />
        </van-grid>
        <div class="gridTitle">
            薪资待遇
        </div>
        <van-grid :gutter="10" :column-num="3">
            <van-grid-item @click="itemBtnClick($event)"  text="全部" />
            <van-grid-item @click="itemBtnClick($event)"  text="8K" />
            <van-grid-item @click="itemBtnClick($event)"  text="10K" />
            <van-grid-item @click="itemBtnClick($event)"  text="15K" />
            <van-grid-item @click="itemBtnClick($event)"  text="20K" />
        </van-grid>

        <div class="filter_footer">
            <van-button plain type="primary">清除</van-button>
            <van-button plain type="info">信息</van-button>
        </div>
    </div>
</template>
<script>
export default{
    name:'filterWrapObj',
    data(){
        return{
            msg:'filterWrapObj组件'
        }
    },
    methods:{
        // 点击图标隐藏组件
        filterWrapCloseFn(){
            // console.log("haha");
            this.$emit('filterMask');
        },
        // 筛选功能按钮点击事件
        itemBtnClick($e){
            // console.log($e.target.innerText);
            // let _text = $e.target.innerText;
            // $e是vant的grid组件自动获取的对象，可通过它找到对应的节点
            let _cls = $e.target.getAttribute('class');
            let _clsArr = _cls.split(' ');
            let _is = false;
            // console.log(_clsArr);
            for(let i=0;i<_clsArr.length;i++){
                if(_clsArr[i] == 'van-grid-item__focus'){
                    _clsArr.splice(i,1);
                    _is = true;
                    break;
                }
                _is = false;

            }
            // 没有，就要添加van-grid-item__focus ,van-grid-item__focus定义在reset_vant.css里
            if(!_is){
                _clsArr.push('van-grid-item__focus');
            }
            let _cls_txt = _clsArr.join(' ');
            $e.target.setAttribute('class',_cls_txt);
        }
    }
}
</script>
<style scoped>
.gridTitle{
    padding: .2rem .2rem;
    clear: both;
    font-size: .3rem;
    font-weight: bold;
}
.gridTitle label{
    font-weight: normal;
    font-size: .2rem;
    padding: 0 10px;
}
.filter_footer{
    text-align: center;
    margin-top: 1rem;
    width: 100%;
}
.filter_footer button{
    margin: 0 .5rem;
}

.filterWrap{
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 10;
}
</style>