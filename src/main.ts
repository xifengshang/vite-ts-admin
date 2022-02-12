import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'
import {store, key} from '@/store/index'

const app = createApp(App)

for (const name in ElIcons){
	app.component(name,(ElIcons as any)[name])
}
app.use(router)
app.use(store, key)
app.use(ElementPlus)
app.mount('#app')
