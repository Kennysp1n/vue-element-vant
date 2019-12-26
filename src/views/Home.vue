<template>
  <div class="home">
    <div class="home-container">
      <aside-nav />
      <div class="main-container">
        <main-content />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AsideNav from '../components/AsideNav'
import MainContent from '../components/MainContent'
export default {
  name: 'home',
  components: {
    AsideNav, MainContent
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .home-container {
    width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .main-container {
      width: 500px;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>