<template>
    <div class="app-container">
        <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow />
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
                    icon: 'wap-home'
                },
                {
                    title: '开奖',
                    to: {
                        name: 'Draw'
                    },
                    icon: 'point-gift'
                },
                {
                    title: '精彩活动',
                    to: {
                        name: 'Exciting'
                    },
                    icon: 'star'
                },
                {
                    title: '发现',
                    to: {
                        name: 'Find'
                    },
                    icon: 'browsing-history'
                },
                {
                    title: '我',
                    to: {
                        name: 'About'
                    },
                    icon: 'manager'
                }
            ]
        }
    },
    components: {
        TabBar
    },
    methods: {
        handleChange(v) {
            console.log('tab value:', v)
        }
    }
}
</script>
