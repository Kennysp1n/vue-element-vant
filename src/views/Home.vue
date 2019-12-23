<template>
  <div class="home">
    <slide-nav />
    <div class="content"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideNav from '../components/SlideNav'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  computed: {
  },
  methods: {
  },
  components: {
    SlideNav
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  background-color: #f6f6f6;
  .slide-nav {
    flex: 1;
    margin-left: 5px;
    margin-right: 20px;
  }
  .content {
    flex: 5;
    margin-right: 20px;
    width: 80%;
    height: 90%;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>