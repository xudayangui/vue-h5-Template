<template>
	<div>
		<!-- vant导航栏 -->
		<van-nav-bar  style="background-color: #dc3b40;" >
			<template #left>
				<span style="color: white;" @click="$router.push('/home')">首页</span>
			</template>
			<template #title>
				<span style="color: white;">登录</span>
			</template>
			<template #right>
				<span style="color: white;" @click="$router.push('/registered')">注册</span>
			</template>
		</van-nav-bar>

		<!-- vant表单 -->
		<van-form>
            <van-field  type="text" v-model="userName" name="用户名" label="用户名"  placeholder="用户名" clearable
			:rules="[{ required: true, message: '请填写账号' },{pattern:/^[1][3,5,6,7,8,9][0-9]{9}$/ , message: '请输入正确的11位手机号'}]"/>
			<van-field v-model="passWord" type="password" name="密码" label="密码"  placeholder="密码" clearable
			:rules="[{ required: true, message: '请填写密码' },{pattern: /^\w{6,}$/,message:'密码不少于6位'}]"></van-field>
			<van-field v-model="verifyCode" type="tel" name="验证码" label="验证码"  placeholder="验证码"></van-field>
			<div style="margin: 16px;">
				<van-button @click="onSubmit" round block type="info" native-type="submit" color="#dc3b40"> 立即登录</van-button>
			</div>
		</van-form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				userName: null,
				passWord: null,
				verifyCode: null
			}
		},
		methods: {
			clearPassWord(value) {
				if (value == 'passWord') { //eslint-disable-line
					this.passWord = null
				} else {
					this.userName = null
				}
			},
			onSubmit() { // 点击登录
				// 如果不符合登录条件则不会继续执行
				if (this.userName.trim() == '') {//eslint-disable-line
					return
				}
				if (!this.userName.match(/^[1][3,5,6,7,8,9][0-9]{9}$/)) {
					return
				}
				if (!this.passWord.match(/^\w{6,}$/)) {
					return
				}
				if (!this.verifyCode.trim() == '') {//eslint-disable-line
					return
				}
				// 获取数据
				let users = localStorage.users
				if (users) {
					users = JSON.parse(users)
					let isLogin = false
					users.map(item => {
						if (item.username == this.username && item.password == this.password) {//eslint-disable-line
							isLogin = true
							return
						}
					})

					if (isLogin) {
						sessionStorage.user = this.username
						this.$router.push({
							path: '/user'
						})
					} else {
						this.$notify({ type: 'danger', message: '输入的账号或密码有误' })
					}
				} else {
					this.$notify({ type: 'danger', message: '该用户不存在' })
				}
			},
			back() { // 返回我的页面
				this.$router.push({
					path: '/user'
				})
			}
		}

	}
</script>
<style lang="scss" scoped>

</style>
