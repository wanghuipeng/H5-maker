<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <footer v-if="routeName !== '/notFound' && routeName !== '/renderH5' ">Copyright©2019 大猎英才平台版权所有</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      routeName: ''
    }
  },
  watch: {
    $route(to, from) {
      this.routeName = to.path
    }
  },
  mounted() {
    const child = document.getElementById('loading')
    child.style.display = 'none'
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
