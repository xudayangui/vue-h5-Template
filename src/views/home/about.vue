<!-- home -->
<template>
	<div class="container"></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
        gridList: [],
        shezhiList: [],
        shezhiList1: []
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {},
  created() {},
  methods: {}
}
</script>
