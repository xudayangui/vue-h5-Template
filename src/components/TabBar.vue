<template>
	<div>
		<van-tabbar fixed route v-model="active" @change="handleChange" z-index="9999"  active-color="red" inactive-color="#999" >
			<van-tabbar-item v-for="(item, index) in data" :to="item.to" :icon="item.icon" :key="index">
                <span>{{ item.title }}</span>
                <template #icon>
                    <van-icon v-if="item.font" :class="item.font" class-prefix="my-icon" :name="item.icon"  size="20"/>
                    <van-icon v-else :name="item.icon" />
                </template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      active: this.defaultActive
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-tabbar--fixed{
    border-top: 1px solid #999;
}
</style>
