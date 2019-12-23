<template>
  <div id="app">
    <top-nav />
    <router-view />
  </div>
</template>

<script>
import TopNav from './components/TopNav'
export default {
  components: {
    TopNav
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
