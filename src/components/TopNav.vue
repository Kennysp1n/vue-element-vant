<template>
  <div class="top-nav">
    <el-menu mode="horizontal">
      <el-menu-item index="1">顶部导航1</el-menu-item>
      <el-menu-item index="2">顶部导航2</el-menu-item>
      <el-menu-item index="3">顶部导航3</el-menu-item>
      <el-submenu index="4">
        <template slot="title">顶部导航4</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
        <el-menu-item index="4-3">选项3</el-menu-item>
        <el-submenu index="4-4">
          <template slot="title">选项4</template>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
          <el-menu-item index="4-4-2">选项2</el-menu-item>
          <el-menu-item index="4-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">顶部导航5</template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item>
        <el-menu-item index="5-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.top-nav {
  .el-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>