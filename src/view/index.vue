<template>
	<div class="home">
		<router-view></router-view>
		<foot-comp></foot-comp>
	</div>
</template>
<script>
	//导入底部footer组件
	import footComp from "@/components/index/footComp"
	export default {
		components:{
			footComp
		}
	}
</script>
<style>
	.home{
		width:100%;
		height: 100%;
		display: flex;
		flex-wrap:wrap;
	}
	
</style>
