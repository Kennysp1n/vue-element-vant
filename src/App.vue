<template>
  <div id="app">
    <top-nav />
    <router-view class="my-router-view" />
  </div>
</template>

<script>
import TopNav from './components/TopNav'
import Home from './views/Home'
export default {
  components: {
    TopNav, Home
  }
}
</script>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
  height: 100%;
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    #app {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #f6f6f6;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .my-router-view {
        //router-view页面占据全部剩余空间
        flex: auto;
      }
    }
  }
}
</style>
