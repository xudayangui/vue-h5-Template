<!-- home -->
<template>
	<div class="about-container">
		<div class="warpper">
            <div style="border-bottom:1px solid #ccc;">
                <van-cell size="large">
                    <template #icon >
                        <van-image style="margin-right:20px;margin-left:10px;" width="80" height="80"  lazy-load :src="require('./../../assets/images/touxiang.jpg')" />
                    </template>
                    <template #title >
                        <div class="custom-title" style="margin-top:10px;margin-bottom:10px;">
                            <span>账号</span> ：<span style="color:#38f;" >{{userName}}</span>
                        </div>
                        <div class="custom-title">
                            <span>余额</span> ：<span style="color:#dc3b40;" >{{5000.00}} 元</span>
                            <!-- <van-icon name="closed-eye" />
                            <van-icon name="eye-o" />
                            <van-icon name="replay" /> -->
                        </div>
                    </template>
                </van-cell>
            </div>
            <div>
                <van-grid :column-num="4" clickable :border="false">
                    <van-grid-item v-for="(item,index) in gridList" :key="index">
                        <template solt-icon>
                            <van-icon :name="item.icon" size="40"/>
                        </template>
                        <template solt-text>
                            <span>{{item.text}}</span>
                        </template>
                    </van-grid-item>
                </van-grid>
            </div>
            <div style="border-top:10px solid #eee;">
                <van-cell is-link v-for="(item,index) in shezhiList" :key="index"  size="large"  clickable>
                    <template #icon >
                        <van-image style="margin-right:20px" width="30" height="30"  lazy-load :src="item.img" />
                    </template>
                    <template #title >
                    <span class="custom-title" >{{item.title}}</span>
                </template>
                </van-cell>
            </div>
            <div style="border-top:10px solid #eee;">
                <van-cell is-link v-for="(item,index) in shezhiList1" :key="index"  size="large"  clickable>
                    <template #icon >
                        <van-image style="margin-right:20px" width="30" height="30"  lazy-load :src="item.img" />
                    </template>
                    <template #title >
                    <span class="custom-title" >{{item.title}}</span>
                </template>
                </van-cell>
            </div>
        </div>
	</div>
</template>

<script>
// 请求接口
// import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
        gridList: [
            // { 'img': '', 'icon': 'shopping-cart', 'text': '彩票' },
            { 'img': '', 'icon': 'gem', 'text': '充值' },
            { 'img': '', 'icon': 'bag', 'text': '提现' },
            { 'img': '', 'icon': 'invition', 'text': '盈亏查询' },
            { 'img': '', 'icon': 'column', 'text': '利息宝' }
        ],
         shezhiList: [
            // { 'img': '', 'icon': 'shopping-cart', 'text': '彩票' },
            { 'img': require('./../../assets/images/touxiang.jpg'), 'title': '个人信息' },
            { 'img': require('./../../assets/images/touxiang.jpg'), 'title': '安全中心' },
            { 'img': require('./../../assets/images/touxiang.jpg'), 'title': '投注记录' },
            { 'img': require('./../../assets/images/touxiang.jpg'), 'title': '充提记录' },
            { 'img': require('./../../assets/images/touxiang.jpg'), 'title': '账户明细' },
            { 'img': require('./../../assets/images/touxiang.jpg'), 'title': '代理中心' },
            { 'img': require('./../../assets/images/touxiang.jpg'), 'title': '我的消息' }
        ],
        shezhiList1: [
            { 'img': require('./../../assets/images/touxiang.jpg'), 'title': '帮助指南' },
            { 'img': require('./../../assets/images/touxiang.jpg'), 'title': '意见反馈' },
            { 'img': require('./../../assets/images/touxiang.jpg'), 'title': '关于我们' }
		]
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    // this.initData()
  },
  created() {
      this.doDispatch()
  },
  methods: {
		// 请求数据案例
		// initData() {
		// 	// 请求接口数据，仅作为展示，需要配置src->config下环境文件
		// 	const params = { user: 'sunnie' }
		// 	getUserInfo(params).then(() => {
		// 	}).catch(() => {
		// 	})
		// },
		// Action 通过 store.dispatch 方法触发
		doDispatch() {
			this.$store.dispatch('setUserName', 'len123456')
		}
	}
}
</script>
<style lang="scss">
	.about-container {
		box-sizing: border-box;
		.warpper {

		}
	}
</style>
