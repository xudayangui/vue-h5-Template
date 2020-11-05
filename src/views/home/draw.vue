<!-- home -->
<template>
	<div class="draw-container">
		<div class="warpper">
            <!-- :label="'第'+item.gameNumber+'期'" -->
            <van-cell v-for="(item,index) in drawList" :key="index"  size="large" clickable>
                <template #icon >
                    <van-image style="margin-right:10px;margin-top:12px;" width="40" height="40" round lazy-load :src="item.imgPath" />
                </template>
                <template #title >
                    <span class="custom-title" >{{item.gameName}}</span>
                </template>
                <template #label >
                    <div class="custom-label" >{{'第'+item.gameNumber+'期'}}</div>
                    <div class="custom-label" >
                        <span class="k3" v-for="(number,key) in item.gameOpenNo" :key="key">{{number}}</span>
                    </div>
                </template>
                <template #right-icon>
                    <van-icon style="margin-top:15px;" name="arrow" size="30" color="#999" />
                </template>
            </van-cell>
        </div>
	</div>
</template>

<script>
// 请求接口
// eslint-disable-next-line no-unused-vars
import { getGameLatestOpenNos } from '@/api/lottrey.js'
export default {
  data() {
    return {
        drawList: []
    }
  },
  created() {
      this.getGameLatestOpenNosHttp()
  },
  mounted() {},
  methods: {
		// 请求数据案例
		getGameLatestOpenNosHttp() {
			// 请求接口数据，仅作为展示，需要配置src->config下环境文件
			const params = { showCase: true }
			getGameLatestOpenNos(params).then((data) => {
                this.drawList = data.list
                this.drawList.forEach(item => {
                    // eslint-disable-next-line no-return-assign
                    return item.gameOpenNo = item.gameOpenNo.split(',')
                })
			}).catch((e) => {
			})
		}
	}
}
// ?showCase=true
</script>
<style lang="scss">
	.draw-container {
		.warpper {
            width: 100%;
            .van-cell {
                .van-cell__left-icon{
                    font-size: 0.9rem;
                    margin-right:0.2rem;
                }

            }
		}
    }
    .k3 {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        background-color: red;
        color: #fff;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
    }
</style>
