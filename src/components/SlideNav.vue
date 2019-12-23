<template>
  <div class="slide-nav">
    <el-menu default-active="1-1" @close="handleClose" id="slide-nav-menu">
      <el-submenu index="1">
        <template slot="title">移动端展示</template>
        <el-menu-item-group>
          <template slot="title">IOS</template>
          <el-menu-item index="1-1">iphone6</el-menu-item>
          <el-menu-item index="1-2">iphone7</el-menu-item>
          <el-menu-item index="1-3">iphone8</el-menu-item>
          <el-menu-item index="1-4">iphoneX</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">Android</template>
          <el-menu-item index="1-5">安卓手机1</el-menu-item>
          <el-menu-item index="1-6">安卓手机2</el-menu-item>
          <el-menu-item index="1-7">安卓手机3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  computed: {
  },
  methods: {
    handleClose (index, indexPath) {

    }
  }
}
</script>

<style lang="scss">
.slide-nav {
  .el-menu {
    border-radius: 10px;
  }
}
</style>