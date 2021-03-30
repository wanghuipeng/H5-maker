<template>
  <div class="diy-main">
    <div class="title">显示区域</div>
    <div class="h5-page">
      <div class="h5-page-header" />
      <div class="main">
        <div v-for="item in componentsArr" :key="item.id" class="diy-item">
          <!-- 标题 -->
          <div v-if="item.value === 'title'" class="relative">
            <i class="el-icon-circle-close" @click="delItem(item)" />
            <header class="ui-title" :style="item.style">{{ item.text }}</header>
          </div>
          <!-- 内容 -->
          <div v-if="item.value === 'content'" class="relative">
            <i class="el-icon-circle-close" @click="delItem(item)" />
            <div class="ui-content" :style="item.style">{{ item.text }}</div>
          </div>
          <!-- 背景 -->
          <div v-if="item.value === 'bgImg'" class="bg">
            <i class="el-icon-circle-close" @click="delItem(item)" />
            <div class="ui-bgImg" :style="item.style" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { removeArray } from '@/utils/common'

export default {
  components: {},
  data() {
    return {
      items: [],
      id: null
    }
  },
  computed: {
    ...mapState({
      componentsArr: state => {
        return state.home.componentsArr
      }
    })
  },
  methods: {
    // 删除已选择的组件
    delItem(item) {
      removeArray(this.componentsArr, item)
    },
    mouseenter(item) {
      console.log(item)
      this.id = item.id
    },
    mouseleave() {
      this.id = null
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/sass/home/diyMain.scss';
</style>

