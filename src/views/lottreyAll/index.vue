<!-- home -->
<template>
	<div class="lottrey-container">
        <div class="warpper">
            <div class="changeColor">
                <van-nav-bar :fixed="true"  title="全部彩票" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar >
            </div>
            <div>
                <van-grid :column-num="3" square clickable :border="false" icon-size="70px">
                    <van-grid-item v-for="(item,index) in lotteryList" :key="index" :icon="item.imgPath" :text="item.gameName" />
                </van-grid>
            </div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
            lotteryList: []
		}
	},
	methods: {
        getGameTypeAllbySession() {
           this.lotteryList = JSON.parse(localStorage.getItem('newList'))
        },
        onClickLeft() {
            this.$router.push('/home')
        }
    },
    created() {
        this.getGameTypeAllbySession()
    }
}
</script>
<style lang="scss" scoped>
.lottrey-container {
	width: 100%;
    height: 100%;
    margin-top: 50px;
    .warpper {
        width: 100%;
    }
}
/deep/ .van-ellipsis {
    color: #ffffff;
  }

/deep/  .van-nav-bar .van-icon {
    color: #ffffff;
  }

 /deep/ .van-nav-bar__text {
    color: #ffffff;
  }

</style>
