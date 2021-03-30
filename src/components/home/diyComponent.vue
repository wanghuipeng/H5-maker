<template>
  <div class="diy-component">
    <div class="title">组件区域</div>
    <div class="components">
      <el-tag
        v-for="(item,index) in initComponentsArr"
        :key="index"
        effect="plain"
        @click="checkIt(item)"
      >{{ item.name }}</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initComponentsArr: [
        {
          name: '标题',
          text: '标题',
          value: 'title'
        },
        {
          name: '内容',
          text: '内容',
          value: 'content'
        },
        {
          name: '背景',
          text: '背景',
          value: 'bgImg'
        }
      ],
      checkComponentsArr: []
    }
  },
  methods: {
    genID(n) {
      let rnd = ''
      for (var i = 0; i < n; i++) {
        rnd += Math.floor(Math.random() * 10)
      }
      return rnd
    },
    checkIt(item) {
      const { checkComponentsArr } = this
      switch (item.value) {
        case 'title':
          item.id = this.genID(13)
          item.style = {
            fontSize: '14px',
            textAlign: 'center',
            lineHeight: '38px',
            color: '#000000'
          }
          break
        case 'content':
          item.id = this.genID(13)
          item.style = {
            fontSize: '14px',
            textAlign: 'left',
            lineHeight: '20px',
            color: '#000000',
            padding: '15px 20px'
          }
          break
        case 'bgImg':
          item.id = this.genID(13)
          item.style = {
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: '0',
            backgroundImage:
              'url("http://www.lzuntalented.cn:8380/static/bg/1584860555000-10a4aw93kcoq-a5e8218371b3da4d1c15c7cbbccb0d3.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: '-1'
          }
          break
        default: {
          return false
        }
      }
      checkComponentsArr.push(Object.assign({}, item))
      this.$store.commit('setComponentsArr', checkComponentsArr)
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/sass/home/diyComponent.scss';
</style>

