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
      // {
      //   path: '/weight',
      //   redirect: '/weight/inseason',
      //   name: 'weight',
      //   children: [
      //     {
      //       path: 'inseason',
      //       name: 'inseason',
      //       component: () => import('@/views/layout/weight/inseason')
      //     },
      //     {
      //       path: 'noseason',
      //       name: 'noseason',
      //       component: () => import('@/views/layout/weight/noseason')
      //     }
      //   ]
      // },
      {
        path: '/inseason',
        name: 'inseason',
        component: () => import('@/views/layout/weight/inseason.vue')
      },
      {
        path: '/noseason',
        name: 'noseason',
        component: () => import('@/views/layout/weight/noseason.vue')
      },
      {
        path: '/knowledge',
        name: 'knowledge',
        component: () => import('@/views/layout/knowledge')
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/layout/detail')
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('@/views/layout/detail/category')
      }
    ]
  }
]
