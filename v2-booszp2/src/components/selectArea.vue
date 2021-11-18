<template>
    <div>
        <van-area :title='titleName'
        :area-list="areaList" 
        @cancel='closeMaskChildComponentFn'
        @confirm='selectAreaFn'
        @change="changeItemFn"
        visible-item-count='15'/>
    </div>
</template>

<script>
import {areaList} from '@vant/area-data'
export default{
    name:'selectArea',
    data(){
        return{
            msg:'选择城区组件',
            titleName:'请选择省市区',
            areaList
        }
    },
    methods:{
        // 取消按钮点击事件，需要触发父组件里的closeMaskFn事件
        closeMaskChildComponentFn(){
            this.$emit('cityMask');
        },
        // 城市选择改变事件
        changeItemFn(_d){
            let cityName = `${_d.getValues()[0].name}-${_d.getValues()[1].name}-${_d.getValues()[2].name}`;
            this.titleName = cityName;
        },
        // 确定选择城市时触发事件
        selectAreaFn(_d){
            this.$emit('cityMask',_d[1].name);
        }
    }
}
</script>