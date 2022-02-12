<template>
  <div>
    <span @click="change">header</span>
  </div>
  <!-- 面包屑 -->
  <div style="width: 600px;">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/">promotion management</a></el-breadcrumb-item
      >
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
  import { useStore } from '@/store/index'
  const store = useStore()

  const change = () => {
    store.commit('updateStatus', !store.state.isCollapse)
  }
</script>
<style lang="scss">
  
</style>
