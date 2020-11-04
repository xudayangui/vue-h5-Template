<!-- home -->
<template>
	<div class="about-container">
		<div class="warpper">
            <van-cell v-for="(item,index) in list" :key="index" >
                <template #title>
                    <div class="custom-title">账号 ：{{item.name}}</div>
                    <div class="custom-title">
                        盈利 ：<span style="color:red;" >{{item.amt}}</span>
                    </div>
                </template>
                <template #right-icon>
                    <van-button :color="index>2?'#eee':['red','green','blue'][index]" type="default" round size="small" style="width:40px;height:40px">
                       <span :style="index>2?'color:#000;':'color:#fff'">{{index+1}}</span>
                    </van-button>
                </template>
            </van-cell>
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
