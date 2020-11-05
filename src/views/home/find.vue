<!-- home -->
<template>
	<div class="find-container">
		<div class="warpper">
            <van-cell v-for="(item,index) in list" :key="index" size="large" clickable>
                <template #icon >
                    <van-image style="margin-right:10px;" width="50" height="50" round lazy-load :src="require('./../../assets/images/touxiang.jpg')" />
                </template>
                <template #title>
                    <div class="custom-title">
                        <span>账号</span> ：<span style="color:#38f;" >{{item.name}}</span>
                    </div>
                    <div class="custom-title">
                        <span>盈利</span> ：<span style="color:#dc3b40;" >¥{{item.amt}}</span>
                    </div>
                </template>
                <template #right-icon>
                    <van-button :color="index>2?'#eee':['#dc3b40','#ffa659','#38f'][index]" type="default" round size="small" style="width:30px;height:30px;margin-top:8px;font-size:16px;">
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
        height: 100%;
		.warpper {
		}
	}
</style>
