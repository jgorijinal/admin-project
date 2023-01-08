import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './styles/index.scss'
import installIcons from '@/icons'
import 'element-plus/dist/index.css'
import './permission'
// 全局注册 Element Plus 的图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 导入 svgIcon
installIcons(app)

app.use(store).use(router).mount("#app");
