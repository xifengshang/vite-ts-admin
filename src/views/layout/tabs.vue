<template>
  <el-tabs
    v-model="activeTab"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
    @tab-click="toRoute"
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
  import { Router, useRoute, useRouter } from 'vue-router'
  import { useStore } from '@/store/index'
  import { ref, reactive, computed, watch, onMounted } from 'vue'
  import { ITab } from '@/store/types';

  const store = useStore()
  const route = useRoute()
  const router: Router = useRouter()

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

  const toRoute = (tab: any) => {
    const { props } = tab
    router.push({path: props.name})
  }

  const removeTab = (targetName: string) => {
    if(targetName === '/dashboard') return
    if(store.getters['getTabs'].length == 1) return
    const tabs = tabsList.value
    let activeName = activeTab.value
    if (activeName === targetName) {
      tabs.forEach((tab: ITab, index: number) => {
        if (tab.path === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.path
          }
        }
      })
    }
    //重新设置当前激活的选项卡
    activeTab.value = activeName
    //重新设置选项卡数据
    store.state.tabList = tabs.filter((tab: ITab) => tab.path !== targetName)
    //跳转路由
    router.push({path:activeName})
  }

  // 监听路由变化
  watch(() => route.path, () => {
    setActiveTab()
    addTab()
  })

  //解决刷新数据丢失的问题
  const beforRefresh =  () =>{
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem('tabsView',JSON.stringify(tabsList.value))
    })
    let tabSession = sessionStorage.getItem('tabsView')
    if(tabSession){
      let oldTabs = JSON.parse(tabSession)
      if(oldTabs.length>0){
        store.state.tabList = oldTabs
      }
    }
  }

  onMounted(() => {
    beforRefresh()
    setActiveTab()
    addTab()
  })
</script>
<style lang="scss">
  .el-tabs--card>.el-tabs__header .el-tabs__item {
    border: none;
  }
  .el-tabs--card>.el-tabs__header {
    border: none!important;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: none!important;
  }
  .el-tabs__header {
    margin: 0!important;
    .el-tabs__item {
      height: 24px;
      line-height: 24px;
      border: 1px solid #f5f5f6!important;
      margin-right: 6px;
      border-radius: 4px;
      &.is-active {
        background-color: #409eff;
        color: #fff;
        border: none;
      }
    }
  }
</style>