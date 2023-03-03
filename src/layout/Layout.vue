<template>
  <el-container class="main-layout" style="min-height: 100vh">
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <el-scrollbar>
        <el-menu
          active-text-color="#fff"
          background-color="#001428"
          :default-active="menuStore.currentMenu?.value"
          text-color="#bbb"
          class="aside-menu"
          :collapse="isCollapse"
        >
          <el-sub-menu v-for="menu in menuData" :key="menu.value" :index="menu.value">
            <template v-if="menu?.titleSlot" #title>
              <el-icon>
                <component :is="menu.iconName" />
              </el-icon>
              <span>{{ menu.name }}</span>
            </template>
            <el-menu-item
              v-for="childMenu in menu.children"
              :key="childMenu.value"
              :index="childMenu.value"
              @click="() => { router.push(childMenu.router) }"
            >
              {{ childMenu.name }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header style="display: flex; align-items: center; background-color: #fff">
        <Header
          :collapse-statue="isCollapse"
          @close-collapse="() => { isCollapse = true }"
          @open-collapse="() => { isCollapse = false }"
        />
      </el-header>
      <MenuTabs />
      <el-scrollbar v-if="mainContentHeight" :height="mainContentHeight">
        <router-view id="main-content" />
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { debounce } from 'lodash';
import { useMenuStore } from '@/store/menu';
import Header from '@/layout/Header.vue';
import menuData from '@/layout/menuData';
import MenuTabs from '@/components/MenuTabs.vue';

const router = useRouter();
const menuStore = useMenuStore();
const isCollapse = ref(false);
const mainContentHeight = ref<string | null>(null);
function resetMainHeight() {
  const visibleHeight = window.innerHeight - 120 + 'px';
  mainContentHeight.value = visibleHeight;
}
onMounted(() => {
  resetMainHeight();
});
window.addEventListener('resize', debounce(() => {
  resetMainHeight();
}, 200));
</script>

<style scoped lang="scss">
.main-layout {
  .el-aside {
    transition: all 1s;
  }
  .el-menu {
    height: 100%;
    border-right: none;
  }
  .el-menu-item {
    &.is-active {
      background-color: #409eff;
    }
    &:hover {
      color: #fff;
    }
  }
  ::v-deep(.el-scrollbar__view) {
    height: 100%;
  }
}
#main-content {
  background-color: #f5f7f9;
  margin: 0 !important;
  padding: 0 5px 10px;
}
</style>
