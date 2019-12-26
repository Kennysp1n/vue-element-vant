<template>
  <div id="app">
    <top-nav />
    <home />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import TopNav from './components/TopNav'
import Home from './views/Home'
export default {
  components: {
    TopNav,Home
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
  margin: 0;
  padding: 0;
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    #app {
      margin: 0;
      padding: 0;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
