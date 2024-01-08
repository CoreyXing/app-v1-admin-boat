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
        component: () => import('@/views/layout/search'),
        children: [
          {
            path: '/search/searchDetail/:food_id?',
            name: 'searchDetail',
            component: () => import('@/views/layout/search/searchDetail'),
          }, 
        ]
      },
      {
        path: '/plate',
        name: 'plate',
        component: () => import('@/views/layout/plate')
      },
      {
        path: '/foodtrack',
        name: 'foodtrack',
        component: () => import('@/views/layout/weight/foodtrack')
      },
      {
        path: '/echarts',
        name: 'echarts',
        component: () => import('@/views/layout/weight/echarts')
      },
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
    ]
  },
]
