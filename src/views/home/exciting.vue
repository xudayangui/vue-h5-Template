<!-- home -->
<template>
	<div class="about-container">
		<div class="warpper">
            <van-grid :column-num="1">
                <van-grid-item v-for="(item,index) in excitList" :key="index">
                    <span>{{item.activityDesc}}</span>
                    <van-image :src="item.activitySrc" />
                </van-grid-item>
            </van-grid>
        </div>
	</div>
</template>

<script>
// 请求接口
import { getWebActivity } from '@/api/lottrey.js'
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
			getWebActivity({ f: '1' }).then((data) => {
                this.excitList = data.list
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
		box-sizing: border-box;
		.warpper {
            .van-grid-item {
                margin: 5px;
                background-color: #fff
            }
		}
    }
    .van-grid-item__content {
        padding-top:0px;
        box-shadow: 0 0 0.5rem 0 rgba(0,0,0,.43);
        border-radius:5px ;
        height: 150px;
    }
    .van-image {
        height: 120px
    }
</style>
