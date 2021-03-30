<template>
  <div class="render-h5">
    <div v-for="(item,index) in componentsArr" :key="index">
      <template v-if="item.value === 'title'">
        <header class="ui-title" :style="item.style">{{ item.text }}</header>
      </template>
      <template v-if="item.value === 'content'">
        <div class="ui-content" :style="item.style">{{ item.text }}</div>
      </template>
      <template v-if="item.value === 'bgImg'">
        <div class="ui-bgImg" :style="item.style" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentsArr: []
    }
  },
  created() {
    this.componentsArr = JSON.parse(window.localStorage.getItem('pageConfig'))
    console.log(typeof this.componentsArr)
  },
  methods: {}
}
</script>
<style scoped lang="scss">
@import '@/assets/sass/renderH5/index.scss';
</style>

