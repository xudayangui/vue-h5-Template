/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
	{
		path: '/',
		component: () => import('@/views/layouts/index'),
		redirect: '/home',
		meta: { title: '首页', keepAlive: false },
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
				meta: { title: '活动', keepAlive: false }
			},
			{
				path: '/find',
				name: 'Find',
				component: () => import('@/views/home/find'),
				meta: { title: '金榜', keepAlive: false }
			},
			{
				path: '/about',
				name: 'About',
				component: () => import('@/views/home/about'),
				meta: { title: '我', keepAlive: false }
			}
		]
	},
	// 登录页面
    {
		path: '/login',
		name: 'Login',
		component: () => import('@/views/layouts/login')
	},
	{
		path: '/registered',
		name: 'Registered',
		component: () => import('@/views/layouts/registered')
	}
]
