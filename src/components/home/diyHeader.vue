<template>
  <div class="diy-header">
    <el-button size="mini" type="primary" @click="savePage">保存</el-button>
    <el-button size="mini" type="success" @click="previewPage">预览</el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      componentsArr: (state) => {
        return state.home.componentsArr;
      },
    }),
  },
  methods: {
    savePage() {
      alert("保存成功，可以预览啦！");
      const pageConfig = JSON.stringify(this.componentsArr);
      window.localStorage.setItem("pageConfig", pageConfig);
    },
    previewPage() {
      const pageConfig = JSON.stringify(this.componentsArr);
      if(!pageConfig) {
         alert("还未保存！");
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/sass/home/diyHeader.scss";
</style>

