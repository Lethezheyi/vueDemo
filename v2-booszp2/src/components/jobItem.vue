<template>
	<div class="jobItems">
		<h1>{{itemObj.title}}</h1>
		<p>{{itemObj.h2_txt}}</p>
		<ul class="areaUl">
			<li v-for="(n,inx) in itemObj.area" :key='inx'>
			{{n}}</li>
		</ul>
		<span>{{itemObj.salary}}</span>
		<label>{{itemObj.hr.hr_txt}}</label>
	</div>
</template>

<script>
export default{
	name:'jobItem',
	data(){
		return{
			msg:'jobItem职位列表组件'
		}
	},
	props:['itemObj']
}
</script>

<style scoped>
.jobItems{
	padding: 1rem 0;
	border-bottom: .2rem solid #eaeaea;
	position: relative;
}
ul.areaUl{
	height: .3rem;
	margin: 0 0 .2rem .2rem;
}
ul.areaUl li{
	float: left;
	margin-right: .1rem;
	background: #f2f3f5;
	padding: .02rem .07rem;
	color: #666;
}
.jobItems h1{
	font-size: 1rem;
	font-weight: bold;
	margin: 0 0 .1rem .2rem;
}
.jobItems p{
	font-size: .25rem;
	color: #666;
	font-weight: bold;
	margin: 0 0 .1rem .2rem;
}
.jobItems label{
	font-size: .2rem;
	font-weight: bold;
	color: #666;
	margin: 3rem 0 0 .2rem;
    display: block;
}
.jobItems span{
	font-size: .25rem;
	color: #14c1bb;
	position: absolute;
	top: .3rem;
	right: .3rem;
}
</style>