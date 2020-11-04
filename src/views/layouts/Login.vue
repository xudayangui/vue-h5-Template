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
			:rules="[{ required: true, message: '请填写账号' }]"/>
			<van-field v-model="passWord" type="password" name="密码" label="密码"  placeholder="密码" clearable
			:rules="[{ required: true, message: '请填写密码' },{pattern: /^\w{6,}$/,message:'密码不少于6位'}]"></van-field>
			<van-field v-model="verifyCode" type="tel" name="验证码" label="验证码"  placeholder="验证码">
                <div slot="button" >
                    <img :src="catCh"  @click="getVerCode"/>
                </div>
            </van-field>
			<div style="margin: 16px;">
				<van-button @click="onSubmit" round block type="info" native-type="submit" color="#dc3b40"> 立即登录</van-button>
			</div>
		</van-form>
	</div>
</template>
<script>
    import { login } from '@/api/user.js'
	export default {
		data() {
			return {
				userName: null,
				passWord: null,
                verifyCode: null,
                catCh: `/getVerCode?w=100&h=35&t=` + Date.now()
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
            getVerCode() {
                this.catCh = `/getVerCode?w=100&h=35&t=` + Date.now()
            },
			onSubmit() { // 点击登录
               const params = {
                    custName: this.userName,
                    pwd: this.passWord,
                    verCode: this.verifyCode
                }
                login(params).then((data) => {
                    console.error(data)
                }).catch((e) => {
                    // eslint-disable-next-line no-undef
                    this.$notify({ type: 'danger', message: e })
                })
			},
			back() { // 返回我的页面
				this.$router.push({ path: '/user' })
			}
		}

	}
</script>
<style lang="scss" scoped>

</style>
