<template>
  <div class="home-page" :style="mainCommonStyle">
    <!-- 页面配置区域 -->
    <diy-header />
    <div class="cont">
      <!-- 组件区域 -->
      <diy-component />
      <!-- H5显示区域 -->
      <diy-main />
      <!-- 编辑区域 -->
      <diy-editor />
    </div>
  </div>
</template>

<script>
import DiyHeader from '@/components/home/diyHeader'
import DiyComponent from '@/components/home/diyComponent'
import DiyMain from '@/components/home/diyMain'
import DiyEditor from '@/components/home/diyEditor'

export default {
  components: {
    DiyHeader,
    DiyComponent,
    DiyMain,
    DiyEditor
  },
  data() {
    return {}
  },
  computed: {
    mainCommonStyle() {
      const clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      const commonHeight = 30
      const minHeight = clientHeight - commonHeight
      return {
        minHeight: minHeight
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/sass/home/index.scss';
</style>

