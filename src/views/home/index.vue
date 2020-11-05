<!-- home -->
<template>
	<div class="index-container">
        <div class="warpper">
            <div>
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(item, index) in bannerList" :key="index">
                        <img v-lazy="item.imgPath"/>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div>
                <van-notice-bar background="#fff" color="black" left-icon="volume-o" :text="notice"/>
            </div>
            <!--  @click="getGameTypeAllHttp" -->
            <div>
                <van-grid :column-num="6" square clickable>
                    <van-grid-item v-for="(item,index) in gridList" :key="index" :icon="item.icon" :text="item.text"/>
                </van-grid>
            </div>
            <div>
                <van-cell title=热门 is-link value="全部" />
            </div>
            <div>
                <van-grid :column-num="4" square clickable :border="false" icon-size="60px">
                    <van-grid-item v-for="(item,index) in lotteryList" :key="index" :icon="item.imgPath" :text="item.gameName" />
                </van-grid>
            </div>
		</div>
	</div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { getGameTypeAll, getNotice, getBannerConfig } from '@/api/lottrey.js'
export default {
	data() {
		return {
			gridList: [
				{ 'img': '', 'icon': 'shopping-cart', 'text': '彩票' },
				{ 'img': '', 'icon': 'gem', 'text': '棋牌' },
				{ 'img': '', 'icon': 'bag', 'text': '电子' },
				{ 'img': '', 'icon': 'invition', 'text': '电竞' },
				{ 'img': '', 'icon': 'column', 'text': '真人' },
				{ 'img': '', 'icon': 'goods-collect', 'text': '体育' }
			],
            lotteryList: [],
            bannerList: [],
            notice: null
		}
	},
    computed: {},
    created() {
        this.getBannerConfigHttp()
        this.getNoticeHttp()
        this.getGameTypeAllHttp()
    },
	mounted() {},
	methods: {
        // 获取全部彩票
        // 处理数据获得热门
        getGameTypeAllHttp() {
            getGameTypeAll().then((data) => {
                const newList = []
                for (const i in data.list) {
                    for (const a in data.list[i].gameSetting) {
                        newList.push(data.list[i].gameSetting[a])
                    }
                }

                // eslint-disable-next-line eqeqeq
                this.lotteryList = newList.filter(item => item.recommend == 1)
                localStorage.setItem('newList', JSON.stringify(newList))
			}).catch((e) => {
                // eslint-disable-next-line no-undef
                this.$notify({ type: 'danger', message: e })
			})
        },
        // 获取公告
        getNoticeHttp() {
            getNotice().then((data) => {
                this.notice = data.list[0].noticeContent
			}).catch((e) => {
                // eslint-disable-next-line no-undef
                this.$notify({ type: 'danger', message: e })
			})
        },
        // 获取banner
        getBannerConfigHttp() {
            getBannerConfig().then((data) => {
                // eslint-disable-next-line eqeqeq
                this.bannerList = data.list.filter(item => item.imgType == '010406')
			}).catch((e) => {
                // eslint-disable-next-line no-undef
                this.$notify({ type: 'danger', message: e })
			})
        }
    }
}
</script>
<style lang="scss" scoped>
.index-container {
	width: 100%;
	height: 100%;
}
.warpper {
		width: 100%;
	}
.my-swipe {
	margin: 5px;
	border-radius: 5px;
	height: 150px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  width: 100%;
}
.my-swipe .van-swipe-item img{
 width: 100%;
 height: 100%;
}
</style>
