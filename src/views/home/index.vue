<!-- home -->
<template>
	<div class="index-container">
		<div class="warpper">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item v-for="(image, index) in images" :key="index">
					<img :src="image" />
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="warpper">
			<van-notice-bar background="#fff" color="black" left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"/>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      images: [
		require('./../../assets/images/banner.png'),
		require('./../../assets/images/banner1.png'),
		require('./../../assets/images/banner2.png'),
		require('./../../assets/images/banner3.png')
      ]
    }
  },
  computed: {},
  mounted() {},
  methods: {}
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
