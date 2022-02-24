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
        <div class="tab-nav">
          <Tabs />
        </div>
        <div class="main-content">
          <router-view />
        </div>
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
  .tab-nav {
    border: 1px solid #f5f5f6;
    padding: 8px;
  }
  .main-content {
    padding: 30px 0;
  }
</style>
