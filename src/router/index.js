import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cart from '@/components/cart'
import mall from '@/components/mall'
import login from '@/components/login'
import register from '@/components/register'
import demo1 from '@/components/demo1'
import detail from '@/components/detail'
// import demo2 from '@/components/demo2'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path: '/cart',
    	name: 'cart',
    	component: cart
    },
    {
    	path: '/login',
    	name: 'login',
    	component: login
    },
    {
    	path: '/mall',
    	name: 'mall',
    	component: mall
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/demo1',
        name: 'demo1',
        component: demo1
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    // },{
    // 	path: '/demo2',
    // 	name: 'demo2',
    // 	component: demo2
    // },
    {
        path: '*',redirect: '/index'
    }
  ]
})
//动态路由匹配

// const user ={
//     template:`
//     <div class="user">
//         <h2>User {{ $route.params.id }}</h2>
//       <router-view></router-view>
//     </div>
//     `
// }
// const router =new VueRouter({
//     routes:[
//     {
//         path:'/user/:id',component:User,
//         children:[
//         {
//             path:'profile',
//             component:UserProfile
//         },
//         {
//             path:'posts',
//             component:UserPosts
//         }
//      ]
//     }
// ]
// })

// // 命名式路由和编程式路由
// <router-link :to="..." repalce>       this.$router.repalce(...)


// // 命名路
// this.$router.push
// router.push({
//     path:'regester',query:{ plan:'private'}
// })

// const router =new VueRouter({
//     routes: [
//     {
//         path: '/user/:userId',
//         name: 'user',
//         component:User
//     }]
// })

// //命名视图
// <router-view class="view one"></router-view>
// <router-view class="view two" name="a"></router-view>
// <router-view class="view three" name="b"></router-view>

// const router =new VueRouter({
//     routes:[
//     {
//         path:'/',
//         components:{
//             default:Foo,
//             a:Bar,
//             b:Baz
//         }
//     }
//     ]
// })

// //eg 嵌套命名视图
// <div>
//     <h1>User Settings</h1>
//     <NavBar/>
//     <router-view/>
//     <router-view name="helper"/>
// </div>

// const router =new VueRouter({
//     routes:[
//     {
//         {
//     path:'/settings',
// }
//     }
//     ]
// })

// const User ={
//     template: `<div> User {{$route.params.id}}</div>`
// }
// const router =new VueRouter({
//     routes:[
//     {
//         path:'/user/:id',component:User
//     }]
// })


































