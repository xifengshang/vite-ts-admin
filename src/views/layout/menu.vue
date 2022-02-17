<template>
  <div class="menu-box">
    <el-menu
      active-text-color="#409eff"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :default-active="activeIndex"
      :collapse="store.state.isCollapse"
      text-color="#fff"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <MenuItem :menuList="menuList"></MenuItem>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
  import MenuItem from './menu-item.vue'
  import { useStore } from '@/store/index'
  import { reactive, computed } from 'vue'
  import { useRoute } from 'vue-router'

  const store = useStore()
  const route = useRoute()
  const activeIndex = computed(() => {
    const { path } = route
    return path
  })

  let menuList = reactive([
    {
      path: '/home',
      component: "Layout",
      meta: {
        title: '首页',
        icon: "HomeFilled"
      },
      children: []
    },
    {
      path: '/user',
      component: "Layout",
      meta: {
        title: '用户',
        icon: "Histogram",
        parentId: 0
      },
      children: [
        {
          path: '/user/index',
          component: "/user/index",
          meta: {
            title: '用户管理-1',
            icon: "Management",
            parentId: 12
          },
        },
        {
          path: '/user/manager',
          component: "/user/manager",
          meta: {
            title: '用户管理-2',
            icon: "Message",
            parentId: 13
          },
        }
      ]
    }
  ])
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(route)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>
<style lang="scss">
  .menu-box {
    height: 100%;
    background-color: #545c64;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
    border: none;
  }
</style>
