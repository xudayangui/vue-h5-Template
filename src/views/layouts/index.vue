<template>
	<div class="app-container">
		<div class="layout-header">
			<van-nav-bar :fixed="true" :title="$route.meta.title" z-index="9999"/>
		</div>
		<div class="layout-content">
			<keep-alive v-if="$route.meta.keepAlive">
				<router-view></router-view>
			</keep-alive>
			<router-view v-else></router-view>
		</div>
		<div class="layout-footer">
			<TabBar :data="tabbars" @change="handleChange" />
		</div>
	</div>
</template>
<script>
import TabBar from '@/components/TabBar'
export default {
    name: 'AppLayout',
    data() {
        return {
            tabbars: [
                {
                    title: '首页',
                    to: {
                        name: 'Home'
                    },
                    icon: 'shouye',
                    font: 'iconfont'
                },
                {
                    title: '开奖',
                    to: {
                        name: 'Draw'
                    },
                    icon: 'kaijiang',
                    font: 'iconfont'
                },
                {
                    title: '活动',
                    to: {
                        name: 'Exciting'
                    },
                    icon: 'star',
                    font: ''
                },
                {
                    title: '金榜',
                    to: {
                        name: 'Find'
                    },
                    icon: 'faxian',
                    font: 'iconfont'
                },
                {
                    title: '我的',
                    to: {
                        name: 'About'
                    },
                    icon: 'wode',
                    font: 'iconfont'
                }
            ]
        }
    },
    components: {
        TabBar
    },
    methods: {
        handleChange(v) {
            console.error(this.$route)
        }
    }
}
</script>
<style scoped>
.layout-content {
    height: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>
