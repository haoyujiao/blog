import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/admin/login'
import Home from '@/components/admin/home'
import Base from '@/components/admin/base'
import ManagePicture from '@/components/admin/managePicture'
import ManageWrite from '@/components/admin/manageWrite'
import ManageBlog from '@/components/admin/manageBlog'
import ArticleDetail from '@/components/admin/articleDetail'
import UserHome from "@/components/user/user_home"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user_home',
      component: UserHome,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/user_home',
      name:'user_home',
      component:UserHome,
    },
    {
      path: '/path',
      component: Base,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/managePicture',
          name: 'managePicture',
          component: ManagePicture
        },
        {
          path: '/manageWrite',
          name: 'manageWrite',
          component: ManageWrite
        },
        {
          path: '/manageBlog',
          name: 'manageBlog',
          component: ManageBlog
        },
        {
          path: '/articleDetail',
          name: 'articleDetail',
          component: ArticleDetail
        }
      ]
    }
  ]
})
