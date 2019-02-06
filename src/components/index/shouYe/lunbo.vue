<template>
	<div class="lun">
		<div class="h">
				<img src="../../../assets/img/fenlei.png"/>
				<input type="text"  placeholder="搜索商品"/>
				<img src="../../../assets/img/xinxi.png"/>
	   </div>
		<div class="swiper-container" ref="typeSwiper">
			  <div class="swiper-wrapper">
				<div class="swiper-slide"><img src="../../../assets/img/1548041728.jpg"/></div>
				<div class="swiper-slide"><img src="../../../assets/img/1547206105.jpg"/></div>
				<div class="swiper-slide"><img src="../../../assets/img/1544758182.jpg"/></div>
				<div class="swiper-slide"><img src="../../../assets/img/1547523260.jpg"/></div>
				<div class="swiper-slide"><img src="../../../assets/img/1547626424.jpg"/></div>
				<div class="swiper-slide"><img src="../../../assets/img/1544758182.jpg"/></div>
			 </div>
			 <div class="swiper-pagination"></div>
	     </div>
	    <div class="yun">
	    	<img src="../../../assets/img/1547803688.png"/>
	    </div>
	</div>
</template>

<script>
	export default{
	
		mounted(){
			this.$nextTick(()=>{
				console.log(this.$refs.typeSwiper)
				    new this.$swiper(this.$refs.typeSwiper,{
					   pagination: {
							el: '.swiper-pagination',
						},
						autoplay: {
						    disableOnInteraction: false,
						    delay: 1000,//1秒切换一次
						    stopOnLastSlide: false,
						    disableOnInteraction: true,
						},

				})
			})
		}
	}
</script>

<style>
	.lun{
		width: 100%;
		height:3.36rem;
		position: relative;
	}
	  .swiper-container{
	  	 height: 3.36rem;
	  }
	  .swiper-wrapper{
	        width: 700%;
	  }
	  .swiper-container  .swiper-slide img{
	  	width: 100%;
	  	height: 3.36rem;
	  }
	  .h{
		height: 0.64rem;
		display: flex;
		width: 100%;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		top: 0rem;
		z-index: 100;
	}
	.h img{
		height: 0.56rem;
	}
	.h input{
		width: 70%;
		background: white;
		height: 0.62rem;
		border:none;
		border-radius: 20px ;
		text-align: center;
	}
	.yun{
		width: 100%;
		height: 1.95rem;
		text-align: center;
	}
	.yun img{
		width: 95%;
		height: 1.5rem;
		margin-top: 0.225rem;
	}

</style>