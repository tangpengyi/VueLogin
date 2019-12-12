import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/login'
import Success from '../views/success'
import UserPersonal from '../views/user/UserPersonal'
import UserContext from '../views/user/UserContext'
import NotFound from '../views/error/NotFound'

Vue.use(Router)


export default new Router({
  mode:'history',
  routes:[
    {
      // 登陆页
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/loginSuccess',
      name:'Success',
      component:Success,
      children:[
        {
          path:'/user/userPersonal',
          name:'UserPersonal',
          component:UserPersonal,
          props:true
        },
        {
          path:'/user/userContext',
          name:'userContext',
          component:UserContext
        }
      ]
    },
    {
      path:'/gomain',
      redirect:'/loginSuccess'
    },
    {
      path:'*',
      component:NotFound
    }
  ]
})
