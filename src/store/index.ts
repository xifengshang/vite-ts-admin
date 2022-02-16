import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { ITab } from './types/index'

export interface State {
  count: number,
  isCollapse: boolean,
  tabList: Array<ITab>
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    isCollapse: false,
    tabList: [
      // {path: '/home', title: '首页'}
    ]
  },
  mutations: {
    updateStatus(state: State, val: boolean) {
      state.isCollapse = val
    },
    addTab(state: State, tab: ITab) {
      if (state.tabList.some(item => item.path === tab.path)) return
      state.tabList.push(tab)
    },
    removeTab(state: State, tabName: string) {
      state.tabList.map((item, index) => {
        if (tabName == item.path) {
          state.tabList.splice(index, 1)
        }
      })
    }
  },
  getters: {
    getTabs: (state: State)  => {
      return state.tabList
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
