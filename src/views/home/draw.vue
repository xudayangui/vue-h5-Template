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
                    <div class="custom-label" v-show="item.gameType==11 || item.gameType==22 || item.gameType==44" >
                        <span v-for="(number,index) in item.gameOpenNo" :key="`A${index}${Date.now}`">
                            {{number}}
                        </span>
                    </div>
                     <div class="custom-label lhc" v-show="item.gameType==66">
                        <span v-for="(number,index) in item.gameOpenNo" :key="`B${index}${Date.now}`">
                            {{number}}
                        </span>
                    </div>
                    <div  class="custom-label" v-show="item.gameType==55">
                        <span :style="'background-color:'+pk10Colors[+number]" v-for="(number,index) in item.gameOpenNo" :key="`c${index}${Date.now}`">
                            {{number}}
                        </span>
                    </div>
                </template>
                <!-- <template #right-icon>
                    <van-icon style="margin-top:15px;" name="arrow" size="30" color="#999" />
                </template> -->
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
        drawList: [],
        pk10Colors: ['', '#edc026', '#2895d9', '#004279', '#e27b26', '#23b2b0', '#6265c2', '#a2a2a2', '#cb383a', '#5c110e', '#3b924f']
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
                     item.gameOpenNo = item.gameOpenNo.replace('+', ',').split(',')
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
        border-radius: 5px;
        overflow: hidden;
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
    .custom-label span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        background-color: red;
        color: #fff;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
        font-size: 12px;
    }
</style>
