// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'  //引入路由器
//引入屏幕适配脚本
import "./assets/rem.js"
//导入默认样式
import "./assets/reset.css"
//引入swiper脚本及样式
import Swiper from "swiper"
import  "swiper/dist/css/swiper.min.css"

Vue.prototype.$swiper=Swiper
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({ //配置对象的属性名都是一些确定的属性名，不能随便修改
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
