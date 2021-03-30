<template>
  <div class="diy-editor">
    <div class="title">设置区域</div>
    <div v-for="(item,index) in componentsArr" :key="index" class="edit-item">
      <template v-if="item.id && item.value === 'title'">
        <el-input
          v-if="item.id"
          v-model="item.text"
          placeholder="请输入标题"
          @input="changeTitle(item)"
        />
      </template>
      <template v-if="item.value === 'content'">
        <el-input
          v-model="item.text"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          @input="changeTitle(item)"
        />
      </template>
      <template v-if="item.value === 'bgImg'">
        <el-button
          v-for="(itemInner,index1) in imgArr"
          :key="index1"
          size="mini"
          @click="checkBgImg(itemInner)"
        >{{ itemInner.name }}</el-button>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      imgArr: [
        {
          name: '背景1',
          url:
            'http://www.lzuntalented.cn:8380/static/bg/1584860555000-10a4aw93kcoq-a5e8218371b3da4d1c15c7cbbccb0d3.jpg'
        },
        {
          name: '背景2',
          url:
            'http://f.hiphotos.baidu.com/zhidao/pic/item/241f95cad1c8a7863cb5bacd6709c93d71cf5052.jpg'
        },
        {
          name: '背景3',
          url: 'http://pic1.win4000.com/wallpaper/b/55597435bb036.jpg'
        }
      ]
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
    // 监听输入框
    changeTitle(e) {
      console.log('监听输入', e)
    },
    // 更换背景图
    checkBgImg(itemInner) {
      this.componentsArr.filter(item => {
        item.style.backgroundImage = `url(${itemInner.url})`
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/sass/home/diyEditor.scss';
</style>

