import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // get token from session
const whiteList = ['/login', '/home', '/draw', '/exciting', '/find', '/registered', '/about'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
	// // 改变title
	// /* 路由发生变化修改页面title */
	// if (to.meta.title) {
	// 	document.title = to.meta.title
	// }
	// 获取token
    const hasToken = getToken()
    console.error(hasToken)
	if (hasToken) {
		if (to.path === '/login') {
			// 如果已登录，请重定向到主页
			next({ path: '/home' })
		} else {
			const hasGetUserInfo = store.getters.userName
			if (hasGetUserInfo) {
				next()
			} else {
				try {
					// 获取用户信息
					await store.dispatch('setUserName')
					next()
				} catch (error) {
					// 删除令牌并进入登录页面重新登录
					await store.dispatch('user/resetToken')
					next(`/login?redirect=${to.path}`)
				}
			}
		}
	} else {
		/* 没有令牌*/
		if (whiteList.indexOf(to.path) !== -1) {
			// 在免登录白名单中，直接进入
			next()
		} else {
			// 其他无权访问的页面将重定向到登录页面。
			next(`/login?redirect=${to.path}`)
		}
	}
})

