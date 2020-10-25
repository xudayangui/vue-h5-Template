/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/draw',
        name: 'Draw',
        component: () => import('@/views/home/draw'),
        meta: { title: '开奖', keepAlive: false }
      },
      {
        path: '/exciting',
        name: 'Exciting',
        component: () => import('@/views/home/exciting'),
        meta: { title: '精彩活动', keepAlive: false }
      },
      {
        path: '/find',
        name: 'Find',
        component: () => import('@/views/home/find'),
        meta: { title: '发现', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/about'),
        meta: { title: '我', keepAlive: false }
      }
    ]
  }
]
