<template>
	<div>
		<footer>
			<router-link to="/shouYe">
			<dl>
				<dt><img src="../../assets/img/sy_1 (1).png"/></dt>
				<dd>首页</dd>
			</dl>
			</router-link>
			<router-link to="/fenLei">
			<dl>
				<dt><img src="../../assets/img/fl_1.png"/></dt>
				<dd>分类</dd>
			</dl>
			</router-link>
			<router-link to="/shop">
			<dl>
				<dt><img src="../../assets/img/gwc_1.png"/></dt>
				<dd>购物车</dd>
			</dl>
			</router-link>
			<router-link to="/my">
			<dl>
				<dt><img src="../../assets/img/wd_1 (2).png"/></dt>
				<dd>我的</dd>
			</dl>
			</router-link>
			<router-link to="/keFu">
			<dl>
				<dt><img src="../../assets/img/kf_1.png"/></dt>
				<dd>客服</dd>
			</dl>
			</router-link>
		</footer>
	</div>
</template>

<script>
</script>

<style>
	footer{
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 14px;
		height: 56px;
		position: fixed;
		bottom:0px;
		left:0px;
		background: #C7C7CC;
	}
	footer dl{
		text-align: center;
	}
	footer  img{
		height:20px;
	}
</style>