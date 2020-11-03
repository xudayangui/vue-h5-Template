<!-- home -->
<template>
	<div class="about-container">
		<div class="warpper"></div>
	</div>
</template>

<script>
// 请求接口
import { getWebActivity } from '@/api/lottrey.js'
export default {
  data() {
    return {}
  },
  created() {
    //   this.getWebActivityHttp()
  },
  mounted() {

  },
  methods: {
		// 获取活动详情
		getWebActivityHttp() {
			// const params = { f: '1' }
			getWebActivity({ f: '1' }).then((data) => {
                console.error(data)
			}).catch((e) => {
                // eslint-disable-next-line no-undef
                this.$notify({ type: 'danger', message: e })
			})
		}
	}
}
</script>
<style lang="scss">
	.about-container {
		.warpper {
		}
	}
</style>
