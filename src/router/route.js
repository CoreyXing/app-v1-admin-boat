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
        path: '/search',
        name: 'search',
        component: () => import('@/views/layout/search')
      },
      {
        path: '/plate',
        name: 'plate',
        component: () => import('@/views/layout/plate')
      },
      {
        path: '/weight',
        name: 'weight',
        component: () => import('@/views/layout/weight')
      },
      {
        path: '/knowledge',
        name: 'knowledge',
        component: () => import('@/views/layout/knowledge')
      }
    ]
  },
]
