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
				path: '/favorites',
				name: 'Favorites',
				component: () => import('@/views/home/favorites'),
				meta: { title: '收藏', keepAlive: false }
			},
			{
				path: '/addressBook',
				name: 'AddressBook',
				component: () => import('@/views/home/addressBook'),
				meta: { title: '通讯录', keepAlive: false }
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
				meta: { title: '我的', keepAlive: false }
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
