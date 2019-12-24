<template>
  <div class="home">
    <slide-nav />
    <div class="content">
      <div class="img-container">
        <el-image :src="src" alt="iphone6" fit="fill"></el-image>
        <div class="display-area">
          <phone class="my-phone"></phone>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideNav from '../components/SlideNav'
import Phone from '../components/Phone'
import { mapState, mapMutations } from 'vuex'
import iphone6 from '../assets/iphone6.jpg'
export default {
  name: 'home',
  data () {
    return {
      src: iphone6
    }
  },
  computed: {

  },
  methods: {
  },
  components: {
    SlideNav, Phone
  },
  mounted () {
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
    display: flex;
    justify-content: center;
    align-items: center;
    .img-container {
      position: relative;
      .el-image {
        z-index: 1;
        width: 375px;
        height: 667px;
      }
      .display-area {
        position: absolute;
        top: 81px;
        left: 21px;
        z-index: 2;
        width: 336px;
        height: 508px;
        background-color: white;
        border: 1px solid black;
      }
    }
  }
}
</style>