<!-- huodong -->
<template>
	<div class="exciting-container">
		<div class="warpper">
            <div class="huodong-warpper">
                <van-grid :column-num="1" class="huodong-lei">
                    <van-grid-item v-for="(item,index) in excitList" :key="index" @click="getHuoDongDetails(item)">
                        <span class="huodong-text">{{item.activityDesc}}</span>
                        <van-image class="huodong-image" :src="item.activitySrc" />
                    </van-grid-item>
                </van-grid>
            </div>
        </div>
	</div>
</template>

<script>
// 请求接口
import { getWebActivity } from '@/api/exciting.js'
export default {
    data() {
        return {
            excitList: []
        }
    },
    created() {
      this.getWebActivityHttp()
    },
    mounted() {
    },
    methods: {
		// 获取活动详情
		getWebActivityHttp() {
			// const params = { f: '1' }
			getWebActivity().then((data) => {
                this.excitList = data.list
			}).catch((e) => {
                // eslint-disable-next-line no-undef
                this.$notify({ type: 'danger', message: e })
			})
        },
        // 点击进入详情页面
        getHuoDongDetails(item) {
            sessionStorage.setItem('activityDetail', JSON.stringify(item.activityDetail))
            this.$router.push({ path: '/excitingDetails' })
        }
	}
}
</script>
<style lang="scss">
	.exciting-container {
		box-sizing: border-box;
    }
    .huodong-warpper{
        padding-top: 2%;
    }
    .huodong-lei {
        .van-grid-item {
            margin-bottom: 2%;
            border-radius: 5px;
            overflow: hidden;
        }
    }
    .huodong-text{
        font-size: 14px;
        margin-top: -10px !important;
    }
</style>
