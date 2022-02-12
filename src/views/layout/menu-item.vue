<template>
  <template v-for="menu in menuList" :key="menu.path">
    <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length > 0">
      <template #title>
        <el-icon>
          <component :is="menu.meta.icon" />
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
      <menu-item :menuList="menu.children"></menu-item>
    </el-sub-menu>
    <el-menu-item :index="menu.path" v-else>
      <el-icon>
        <component :is="menu.meta.icon" />
      </el-icon>
      <span>{{ menu.meta.title }}</span>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
  defineProps(['menuList'])
</script>
<style lang="scss">
  .el-sub-menu__title:hover {
    background-color: var(--el-menu-hover-bg-color) !important;
  }
</style>
