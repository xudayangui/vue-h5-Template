<!-- home -->
<template>
	<div class="about-container">
		<div class="warpper">
            {{userName}}
        </div>
	</div>
</template>

<script>
// 请求接口
// import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    // this.initData()
  },
  created() {
      this.doDispatch()
  },
  methods: {
		// 请求数据案例
		// initData() {
		// 	// 请求接口数据，仅作为展示，需要配置src->config下环境文件
		// 	const params = { user: 'sunnie' }
		// 	getUserInfo(params).then(() => {
		// 	}).catch(() => {
		// 	})
		// },
		// Action 通过 store.dispatch 方法触发
		doDispatch() {
			this.$store.dispatch('setUserName', 'len123456')
		}
	}
}
</script>
<style lang="scss">
	.about-container {
		/* 你的命名空间 */
		background: #fff;
		height: 100vh;
		box-sizing: border-box;
		.warpper {


		}
	}
</style>
