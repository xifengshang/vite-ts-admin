<template>
  <el-container>
    <el-aside class="aside">
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <div>
          <Tabs />
        </div>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
  import Header from './header.vue'
  import Menu from './menu.vue'
  import Tabs from './tabs.vue'
</script>
<style lang="scss">
  .el-container {
    height: 100%; 
  }
  .el-aside {
    height: 100%;
    --el-aside-width: auto !important;
  }
  .aside {
    background-color: #545c64;
  }
</style>
