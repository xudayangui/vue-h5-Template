<template>
	<div>
		<!-- vant导航栏 -->
		<van-nav-bar  style="background-color: #dc3b40;">
			<template #left>
				<span style="color: white;" @click="$router.push('/home')">首页</span>
			</template>
			<template #title>
				<span style="color: white;">注册</span>
			</template>
			<template #right>
				<span style="color: white;" @click="$router.push('/login')">登录</span>
			</template>
		</van-nav-bar>

		<!-- vant表单 -->
		<van-form>
            <van-field  type="text" v-model="userName" name="账号" label="账号"  placeholder="账号为6-12位数字或英文字母" clearable
			:rules="[{ required: true, message: '请输入账号' },{pattern:/^[1][3,5,6,7,8,9][0-9]{9}$/ , message: '请输入正确账号'}]"/>

			<van-field type="password" v-model="passWord"  name="密码" label="密码"  placeholder="密码为6-12位数字或英文字母" clearable
			:rules="[{ required: true, message: '请输入密码' },{pattern: /^\w{6,}$/,message:'密码为6-12位数字或英文字母'}]"></van-field>

            <van-field type="password" v-model="passWord"  name="请输入确认密码" label="确认密码"  placeholder="密码" clearable
			:rules="[{ required: true, message: '请输入确认密码' },{pattern: /^\w{6,}$/,message:'密码为6-12位数字或英文字母'}]"></van-field>

            <van-field  type="text" v-model="userName" name="姓名" label="姓名"  placeholder="真实姓名" clearable
			:rules="[{ required: true, message: '请输入姓名' }]"/>

            <van-field  type="tel" v-model="userName" name="手机号" label="手机号"  placeholder="手机号为11位数字" clearable
			:rules="[{ required: true, message: '请输入手机号' }]"/>

            <van-field  type="digit" v-model="userName" name="邀请码" label="邀请码"  placeholder="邀请码4位数字" clearable
			:rules="[{ required: true, message: '请输入邀请码' }]"/>

            <van-field type="digit" v-model="verifyCode"  name="验证码" label="请输入验证码"  placeholder="验证码"
            :rules="[{ required: true, message: '请输入确认密码' }]"></van-field>

			<div style="margin: 16px;">
				<van-button @click="onSubmit" color="#dc3b40" round block type="info" native-type="submit"> 立即注册</van-button>
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
