import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(["@views/Login"], resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(["@views/Home"], resolve),
      redirect: '/home/index',
      children: [{
          path: '/home/index',
          name: 'index',
          component: resolve => require(["@views/index/Index"], resolve),
          children: [{
            path: "/home/index/join",
            name: "join",
            component: resolve => require(["@views/index/Join"], resolve),
          }]
        },
        {
          path: '/home/activity',
          name: 'activity',
          component: resolve => require(["@views/activity/Activity"], resolve)
        },
        {
          path: '/home/vote',
          name: 'vote',
          component: resolve => require(["@views/vote/Vote"], resolve)
        },
        {
          path: '/home/mine',
          name: 'mine',
          component: resolve => require(["@views/mine/Mine"], resolve)
        }
      ]
    },

  ]
})