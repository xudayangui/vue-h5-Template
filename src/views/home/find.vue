<!-- home -->
<template>
	<div class="about-container">
		<div class="warpper">
            <van-cell v-for="(item,index) in list" :key="index" :title="'用户名 ：' + item.name" />
        </div>
	</div>
</template>

<script>
// 请求接口
import { getBetRank } from '@/api/lottrey.js'
export default {
  data() {
    return {
        list: []
    }
  },
  created() {
      this.getBetRankHttp()
  },
  mounted() {

  },
  methods: {
		// 获取排行榜详情
		getBetRankHttp() {
			getBetRank({}).then((data) => {
                this.list = data
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
