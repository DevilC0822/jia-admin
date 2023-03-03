import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import Directives from '@/directives/drag';
import App from './App.vue';
import router from './router/router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import './style.css';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(pinia);
app.use(Directives);

app.mount('#app');
