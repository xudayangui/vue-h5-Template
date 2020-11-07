<!-- home -->
<template>
	<div class="draw-container">
		<div class="warpper">
            <div class="feilei-warpper">
                <van-dropdown-menu overlay close-on-click-outside title="选择彩种">
                    <van-dropdown-item v-model="gameType" :options="option" @change="getlottreyFenlei()" />
                </van-dropdown-menu>
            </div>
            <div>
                <van-cell v-for="(item,index) in drawList" :key="index"  size="large" clickable>
                    <template #icon >
                        <van-image style="margin-right:10px;margin-top:12px;" width="40" height="40" round lazy-load :src="item.imgPath" />
                    </template>
                    <template #title >
                        <span class="custom-title" >{{item.gameName}}</span>
                    </template>
                    <template #label >
                        <div class="custom-label" >{{'第'+item.gameNumber+'期'}}</div>
                        <div class="k3" v-show="item.gameType==22">
                            <span  v-for="(number,index) in item.gameOpenNo" :key="`B${index}${Date.now}`">
                                <img  :src="k3List[Number(number)]"/>
                            </span>
                            <span class="code" v-for="(code,index) in item.gameOpenNoCase" :key="`E${index}${Date.now}`">
                                {{code}}
                            </span>
                        </div>
                        <div class="custom-label" v-show="item.gameType==11 || item.gameType==44" >
                            <span v-for="(number,index) in item.gameOpenNo" :key="`A${index}${Date.now}`">
                                {{number}}
                            </span>
                        </div>
                        <div class="custom-label" v-show="item.gameType==66">
                            <span :class="number!='+'?'':'lhcj'" v-for="(number,index) in item.gameOpenNo" :key="`t${index}${Date.now}`">
                                {{number}}
                            </span>
                        </div>
                        <div  class="custom-label" v-show="item.gameType==55">
                            <span :style="'background-color:'+pk10Colors[Number(number)]" v-for="(number,index) in item.gameOpenNo" :key="`c${index}${Date.now}`">
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
            pk10Colors: ['', '#edc026', '#2895d9', '#004279', '#e27b26', '#23b2b0', '#6265c2', '#a2a2a2', '#cb383a', '#5c110e', '#3b924f'],
            k3List: [
                '',
                require('./../../assets/images/shaizi1.png'),
                require('./../../assets/images/shaizi2.png'),
                require('./../../assets/images/shaizi3.png'),
                require('./../../assets/images/shaizi4.png'),
                require('./../../assets/images/shaizi5.png'),
                require('./../../assets/images/shaizi6.png')
            ],
            gameType: '0',
            option: [
                { text: '全部彩种', value: '0' },
                { text: '时时彩', value: '11' },
                { text: '快三', value: '22' },
                { text: '11选5', value: '44' },
                { text: '赛车PK', value: '55' },
                { text: '六合彩', value: '66' }
            ]
        }
    },
    created() {
        this.getGameLatestOpenNosHttp()
    },
    mounted() {},
    methods: {
        getlottreyFenlei() {
            this.drawList = this.drawList1
            // this.getGameLatestOpenNosHttp()
            // eslint-disable-next-line no-empty
            // eslint-disable-next-line eqeqeq
            if (this.gameType != '0') {
                // eslint-disable-next-line eqeqeq
               this.drawList = this.drawList1.filter(item => item.gameType == this.gameType)
            }
        },
        // 请求数据
        getGameLatestOpenNosHttp() {
            // 请求接口数据，仅作为展示，需要配置src->config下环境文件
            const params = { showCase: true }
            getGameLatestOpenNos(params).then((data) => {
                this.drawList = data.list
                this.drawList.forEach(item => {
                    item.gameOpenNo = item.gameOpenNo.replace('+', ',').split(',')
                })
                this.drawList.forEach(item => {
                    // eslint-disable-next-line no-empty
                    if (+item.gameType === 66) {
                    item.gameOpenNo.splice(-1, 0, '+')
                    }
                })
                this.drawList1 = this.drawList
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
    .lhcj {
        background:transparent !important;
        color:black !important;
        font-size:16px !important;
        width: 10px !important;
    }
    .k3 {
        line-height: 20px;
        span {
            display:inline-block;
            vertical-align: middle;
            width: 20px;
            height: 20px;
        }
        .code {
            line-height: 16px;
            height: 16px;
            width: 16px;
            font-size: 12px;
            border: 1px solid #ccc;
            color: red;
            margin-left: 5px;
            text-align: center;
            border-radius: 2px;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    .van-dropdown-item__content {
      width: 96%;
      margin-left:2%;
      margin-right:2%;
      margin-top:0.5%;
      border-radius: 5px;
      overflow: hidden;
  }
</style>
