<template>
  <div class="phone">
    <van-nav-bar
      title="iphone6"
      left-text="左键"
      right-text="右键"
      @click-left="leftDialog=!leftDialog"
      @click-right="rightDialog=!rightDialog"
    ></van-nav-bar>
    <van-grid :column-num="2" v-if="!showOverlay">
      <van-grid-item v-for="i of csgo" :key="i">
        <van-image :alt="i" :src="i" @click="imgClick">
          <template slot="error">加载失败</template>
        </van-image>
      </van-grid-item>
    </van-grid>
    <van-overlay class-name="my-overlay" :show="showOverlay" @click="showOverlay=!showOverlay">
      <van-image :src="target"></van-image>
    </van-overlay>
    <van-dialog v-model="leftDialog" title="左键" overlay-class="dialog-overlay"></van-dialog>
    <van-dialog v-model="rightDialog" title="右键" overlay-class="dialog-overlay"></van-dialog>
  </div>
</template>

<script>
import csgo1 from '../assets/csgo1.jpg'
import csgo2 from '../assets/csgo2.jpg'
import csgo3 from '../assets/csgo3.jpg'
import csgo4 from '../assets/csgo4.jpg'
import csgo5 from '../assets/csgo5.jpg'
import csgo6 from '../assets/csgo6.jpeg'
export default {
  data () {
    return {
      csgo: [
        csgo1, csgo2, csgo3, csgo4, csgo5, csgo6
      ],
      showOverlay: false,
      target: null,
      leftDialog: false,
      rightDialog: false,
    }
  },
  methods: {
    clickLeft () {
      console.log('456');

    },
    clickRight () {
      console.log('456');

    },
    imgClick (e) {
      this.showOverlay = !this.showOverlay
      this.target = e.target.alt

    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.phone {
  position: relative;
  width: 100%;
  height: 100%;
  .my-overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .van-dialog {
    position: absolute;
  }
  .dialog-overlay {
    position: absolute;
  }
}
</style>