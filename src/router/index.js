import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index.vue'
import shouYe from '@/view/index/shouYe'
import fenLei from '@/view/index/fenLei'
import keFu from '@/view/index/keFu'
import my from '@/view/index/my'
import shop from '@/view/index/shop'
import login from '@/view/index/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:"/shouYe", //默认路由，路由定向
      children:[{
      	  path: '/shouYe',
		      name: 'shouYe',
		       meta:{
		      	isLogin:false,
		      },
		      component: shouYe,
      },{
      	  path: '/shop',
		      name: 'shop',
		       meta:{
		      	isLogin:false,
		      },
		      component: shop,
      },{
      	  path: '/my',
		      name: 'my',
		      meta:{
		      isLogin:true
		      },
		        component: my,
      },{
      	  path: '/keFu',
		      name: 'keFu',
		      meta:{
		      isLogin:false,
		      },
		      component: keFu,
      },{
      	  path: '/fenLei',
		      name: 'fenLei',
		      meta:{
		      isLogin:false,
		      },
		      component: fenLei,
      },{
      	  path: '/login',
		      name: 'login',
		      component: login,
      }]
    }
  ]
})
