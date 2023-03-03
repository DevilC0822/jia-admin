import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import menuData from '@/layout/menuData';
import type * as T from '@/types/menu';

export const useMenuStore = defineStore('menu', () => {
  const openedMenuList = ref<T.IChildMenu[]>([]);
  const currentMenuList = ref<T.IChildMenu[]>([]);
  const currentMenu = ref<T.IChildMenu>();


  return { openedMenuList, currentMenu, currentMenuList };
}, {
  persist: {
    enabled: true , // 这个配置代表存储生效，而且是整个store都存储
    strategies: [
      {
        key: 'menu',
        storage: localStorage,
      },
    ],
  }
});
