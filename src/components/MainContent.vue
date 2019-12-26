<template>
  <div class="main-content">
    <el-image :src="src" alt="iphone6" fit="fill"></el-image>
    <div class="display-area">
      <phone class="my-phone"></phone>
    </div>
  </div>
</template>

<script>
import Phone from './Phone'
import iphone6 from '../assets/iphone6.jpg'

export default {
  data () {
    return {
      src: iphone6
    }
  },
  components: {
    Phone
  }
}
</script>

<style lang="scss">
.main-content {
  position: relative;
  transform: scale(0.8);
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
</style>