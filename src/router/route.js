// 配置路由信息,默认暴露
export default [
  {
    path: '/reg',
    component: () => import('@/views/register')
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/layout/home')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/layout/search')
      },
      {
        path: '/plate',
        name: 'plate',
        component: () => import('@/views/layout/plate')
      },
      // {
      //   path: '/monitor',
      //   name: 'monitor',
      //   component: () => import('@/views/layout/weight/monitor')
      // },
      {
        path: '/foodtrack',
        name: 'foodtrack',
        component: () => import('@/views/layout/weight/foodtrack')
      },
      // {
      //   path: '/season',
      //   name: 'season',
      //   component: () => import('@/views/layout/weight/season')
      // },
      // {
      //   path: '/noseason',
      //   name: 'noseason',
      //   component: () => import('@/views/layout/weight/noseason')
      // },
      {
        path: '/knowledge',
        name: 'knowledge',
        component: () => import('@/views/layout/knowledge')
      },
      {
        path: '/bigModel',
        name: 'bigModel',
        component: () => import('@/views/layout/bigModel')
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/layout/detail'),
        children: [
          {
            path: '/detail/detailBig',
            name: 'detailBig',
            component: () => import('@/views/layout/detail/detailBig'),
          },
          {
            path: '/detail/detailSmall',
            name: 'detailSmall',
            component: () => import('@/views/layout/detail/detailSmall'),
          },          
        ]
      }
    ]
  },
]
