<template>
  <el-tabs
    v-model="activeTab"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in tabsList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useStore } from '@/store/index'
  import { ref, reactive, computed, watch } from 'vue'
  import { ITab } from '@/store/types';

  const store = useStore()
  const route = useRoute()

  // 获取tabsList
  const tabsList = computed(() => {
    return store.getters['getTabs']
  })
  const activeTab = ref('')
  const setActiveTab = () => {
    activeTab.value = route.path
  }
  // 添加选项卡
  const addTab = () => {
    const { path, meta } = route
    const tab: ITab = {
      path: path,
      title: meta.title as string
    }

    store.commit('addTab', tab)
  }

  const removeTab = (targetName: string) => {
    
  }

// 监听路由变化
  watch(() => route.path, () => {
    setActiveTab()
    addTab()
  })
</script>