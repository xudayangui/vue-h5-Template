<!-- huodong -->
<template>
	<div class="excitingDetails-container">
        <div class="excitingDetails">
            <van-nav-bar :fixed="true"  title="活动详情" left-text="返回" placeholder left-arrow @click-left="onClickLeft"></van-nav-bar >
        </div>
		<div class="img-warpper">
            <van-image  v-for="(item,index) in imagePathList" :key="index"  fit="contain" :src="item.activityDetailSrc">
             <template v-slot:loading>
                <van-loading type="spinner" size="20" />
            </template>
            </van-image>
        </div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            imagePathList: []
        }
    },
    created() {
        this.imagePathList = JSON.parse(sessionStorage.getItem('activityDetail'))
    },
    mounted() {
    },
    methods: {
        onClickLeft() {
            sessionStorage.removeItem('activityDetail')
            this.$router.push('/exciting')
        }
	}
}
</script>
<style lang="scss">
.excitingDetails-container {
    box-sizing: border-box;
    background: #fff;
    height: 100%;
}
.excitingDetails /deep/ .van-ellipsis {
    color: #ffffff;
  }

.excitingDetails /deep/  .van-nav-bar .van-icon {
    color: #ffffff;
  }

 .excitingDetails /deep/ .van-nav-bar__text {
    color: #ffffff;
  }
  .img-warpper {
      background: #fff;
  }
</style>
