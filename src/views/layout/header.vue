<template>
  <div>
    <span @click="change">header</span>
  </div>
  <!-- 面包屑 -->
  <div style="width: 600px;">
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item> -->
      <el-breadcrumb-item v-for="item in routeBreadcrumb" :to="{ path: item.path }">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
  import { useRoute, RouteLocationMatched } from 'vue-router'
  import { ref, Ref, watch } from 'vue'
  import { useStore } from '@/store/index'
  
  const store = useStore()
  const route = useRoute()

  const change = () => {
    store.commit('updateStatus', !store.state.isCollapse)
  }

  const routeBreadcrumb: Ref<RouteLocationMatched[]> = ref([])

  
  
  watch(() => route.path, path => {
    console.log(path)
    getBreadcrumb()
  })
  const getBreadcrumb = () => {
    let matched = route.matched.filter(item => item.meta && item.meta.title)
    const first = matched[0]

    if (first.path != '/home') {
      matched = [{path: '/home', meta: {title: '首页'}} as any].concat(matched)
    }

    console.log('----->', matched);
    
    routeBreadcrumb.value = matched
  }

  getBreadcrumb()
  
</script>
<style lang="scss">
  
</style>
