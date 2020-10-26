<template>
  <div class="app-container">
    <div class="layout-header">
        <van-nav-bar :fixed="true" title="标题" />
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
          title: '活动',
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
<style scoped>
</style>
