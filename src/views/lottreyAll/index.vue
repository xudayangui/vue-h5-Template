<!-- home -->
<template>
	<div class="lottrey-container">
        <div class="changeColor">
            <van-nav-bar :fixed="true"  title="全部彩票" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar >
        </div>
        <div class="warpper">
            <div class="feilei-warpper">
                <van-dropdown-menu overlay close-on-click-outside title="选择彩种">
                    <van-dropdown-item v-model="gameType" :options="option" @change="getlottreyFenlei()" />
                </van-dropdown-menu>
            </div>
            <div class="lottrey-warpper">
                <van-grid :column-num="3" square clickable :border="false" icon-size="60px" >
                    <van-grid-item v-for="(item,index) in lotteryList" :key="index" :icon="item.imgPath" :text="item.gameName">
                        <template #text>
                            <span style="font-size:14px;margin-top:5px;">{{item.gameName}}</span>
                            <span style="color:#999;">{{item.gameNote}}</span>
                        </template>
                    </van-grid-item>
                </van-grid>
            </div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
            gameType: '0',
            lotteryList: [],
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
	methods: {
        getlottreyFenlei() {
            this.getGameTypeAllbySession()
            // eslint-disable-next-line no-empty
            // eslint-disable-next-line eqeqeq
            if (this.gameType != '0') {
                // eslint-disable-next-line eqeqeq
               this.lotteryList = this.lotteryList.filter(item => item.gameType == this.gameType)
            }
        },
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
    .warpper {
        width: 96%;
        margin: auto;
    }
}
.lottrey-warpper {
    margin: 2% 0px;
    border-radius: 5px;
    overflow: hidden;
    // height: 80%;
    width: 100%;
    background: #fff;
}
.feilei-warpper {
    margin-top: 50px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
}
.changeColor /deep/ .van-ellipsis {
    color: #ffffff;
  }

.changeColor /deep/  .van-nav-bar .van-icon {
    color: #ffffff;
  }

 .changeColor /deep/ .van-nav-bar__text {
    color: #ffffff;
  }
  /deep/ .van-dropdown-item__content {
      width: 96%;
      margin-left:2%;
      margin-right:2%;
      margin-top:0.5%;
      border-radius: 5px;
      overflow: hidden;
  }

</style>
