<template>
  <div class="tabs-box">
    <el-icon
      v-if="isShowArrow"
      style="margin: 0 10px;"
      :size="14"
      @click="scrollLeft"
    >
      <ArrowLeftBold />
    </el-icon>
    <el-scrollbar id="scroll-tabs-box" ref="scrollbarRef" @scroll="scroll">
      <transition-group
        id="scroll-tabs"
        name="flip-drag"
        class="tabs"
        tag="ul"
      >
        <div
          v-for="(item, index) in menuStore.openedMenuList"
          :key="item.value"
          class="tab-item"
          :class="route.name === item.value ? 'active' : ''"
          draggable="true"
          @click="chooseTab(item.value)"
          @dragstart="dragstart(index)"
          @dragenter="dragenter($event, index)"
          @dragover="dragover"
        >
          <div>
            {{ item.name }}
          </div>
          <div
            sign="icon"
            style="display: flex; align-items: center; cursor: pointer;"
          >
            <el-icon
              v-if="item.isClosable ?? true"
              :size="14"
              style="margin-left: 5px;"
              @click="removeTab(item.value)"
            >
              <IEpClose />
            </el-icon>
          </div>
        </div>
      </transition-group>
    </el-scrollbar>
    <el-icon
      v-if="isShowArrow"
      style="margin: 0 10px;"
      :size="14"
      @click="scrollRight"
    >
      <ArrowRightBold />
    </el-icon>
    <el-dropdown trigger="hover">
      <el-icon class="bottom-arrow" :size="14">
        <IEpArrowDownBold />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="dropdown in dropdownOptions"
            :key="dropdown.name"
            :disabled="dropdown.disabled"
            @click="dropdown?.clickMethod"
          >
            <el-icon :size="14">
              <component :is="dropdown.iconName" />
            </el-icon>
            <span>{{ dropdown.name }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { debounce, throttle } from 'lodash';
import { ElScrollbar } from 'element-plus';
import dropDownData from './dropdownOptions';
import { useMenuStore } from '@/store/menu';
import type * as T from '@/types/menu';

const menuStore = useMenuStore();
const router = useRouter();
const route = useRoute();

const chooseTab = (tab: string) => {
  const nextRouter = menuStore.openedMenuList.find((i) => i.value === tab)?.router;
  if (nextRouter) {
    router.push(nextRouter);
  }
};
const removeTab = (tab: string) => {
  menuStore.openedMenuList = menuStore.openedMenuList.filter((i) => i.value !== tab);
  if (menuStore.openedMenuList.find((i) => i.router === menuStore.currentMenu!.router)) {
    router.push(menuStore.currentMenu!.router);
    return;
  }
  router.push(menuStore.openedMenuList[menuStore.openedMenuList.length - 1]?.router ?? '/dashboard/console');
};

const dragIndex = ref(0);

const dragstart = (index: number) => {
  dragIndex.value = index;
};
const dragenter = debounce((e: DragEvent, index: number) => {
  e.preventDefault();
  if (dragIndex.value !== index) {
    const source = menuStore.openedMenuList[dragIndex.value];
    menuStore.openedMenuList.splice(dragIndex.value, 1);
    menuStore.openedMenuList.splice(index, 0, source);
    dragIndex.value = index;
  }
}, 210);
const dragover = (e: DragEvent) => {
  e.preventDefault();
};

const dropdownOptions = ref(dropDownData);
watch(() => menuStore.currentMenu, (newVal) => {
  dropdownOptions.value[2].disabled = !(newVal?.isClosable ?? true);
  dropdownOptions.value[2].clickMethod = () => {
    menuStore.openedMenuList = menuStore.openedMenuList.filter((i) => i.value !== newVal?.value);
    router.push(menuStore.openedMenuList[menuStore.openedMenuList.length - 1].router);
  };
}, { immediate: true, deep: true });
watch(() => [menuStore.currentMenu!.value, menuStore.openedMenuList], (newVal) => {
  const value = newVal[0] as string;
  const list = newVal[1] as T.IChildMenu[];

  const otherList = list.filter((i) => !i?.isClosable && !(i.value === 'console' || i.value === value));
  const isCloseOthers = otherList.length > 0;
  dropdownOptions.value[3].disabled = !isCloseOthers;
  dropdownOptions.value[3].clickMethod = () => {
    menuStore.openedMenuList = menuStore.openedMenuList.filter((i) => !otherList.map((item) => item.value).includes(i.value));
  };

  const leftList = list.slice(0, list.findIndex((i) => i.value === value));
  const canCloseLeftList = leftList.filter((i) => !i?.isClosable && !(i.value === 'console'));
  const isCLoseLeft = canCloseLeftList.length > 0;
  dropdownOptions.value[4].disabled = !isCLoseLeft;
  dropdownOptions.value[4].clickMethod = () => {
    menuStore.openedMenuList = menuStore.openedMenuList.filter((i) => !canCloseLeftList.map((item) => item.value).includes(i.value));
  };

  const RightList = list.slice(list.findIndex((i) => i.value === value) + 1);
  const canCloseRightList = RightList.filter((i) => !i?.isClosable && !(i.value === 'console'));
  const isCLoseRight = canCloseRightList.length > 0;
  dropdownOptions.value[5].disabled = !isCLoseRight;
  dropdownOptions.value[5].clickMethod = () => {
    menuStore.openedMenuList = menuStore.openedMenuList.filter((i) => !canCloseRightList.map((item) => item.value).includes(i.value));
  };

  const canCloseAllList = list.filter((i) => !i?.isClosable && !(i.value === 'console'));
  const isCloseAll = canCloseAllList.length > 0;
  dropdownOptions.value[6].disabled = !isCloseAll;
  dropdownOptions.value[6].clickMethod = () => {
    menuStore.openedMenuList = menuStore.openedMenuList.filter((i) => !canCloseAllList.map((item) => item.value).includes(i.value));
    router.push(menuStore.openedMenuList[0].router);
  };
}, { immediate: true, deep: true });

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();
const isShowArrow = ref(false);
const scrollValue = ref(0);

const scrollLeft = () => {
  const node = document.querySelector('#scroll-tabs')!;
  if (scrollValue.value + 100 > 0) {
    node.setAttribute('style', 'transform: translateX(0px)');
    scrollValue.value = 0;
    return;
  }
  node.setAttribute('style', `transform: translateX(${scrollValue.value + 100}px)`);
  scrollValue.value += 100;
};
const scrollRight = () => {
  const node = document.querySelector('#scroll-tabs')!;
  const tabsWidth = document.querySelector('#scroll-tabs')!.scrollWidth;
  const boxWidth = document.querySelector('#scroll-tabs-box')!.scrollWidth;
  const maxValue = tabsWidth - boxWidth;
  if (Math.abs(scrollValue.value - 100) > maxValue) {
    node.setAttribute('style', `transform: translateX(-${maxValue}px)`);
    scrollValue.value = -maxValue;
    return;
  }
  node.setAttribute('style', `transform: translateX(${scrollValue.value - 100}px)`);
  scrollValue.value -= 100;
};

const scroll = (scroll: {scrollLeft: number}) => {
  scrollValue.value = scroll.scrollLeft;
};

watch(() => menuStore.openedMenuList.length, () => {
  nextTick(() => {
    const tabsWidth = document.querySelector('#scroll-tabs')?.scrollWidth;
    const boxWidth = document.querySelector('#scroll-tabs-box')?.scrollWidth;
    isShowArrow.value = tabsWidth! > boxWidth!;
  });
}, { immediate: true });
window.addEventListener('resize', throttle(() => {
  const tabsWidth = document.querySelector('#scroll-tabs')?.scrollWidth;
  const boxWidth = document.querySelector('#scroll-tabs-box')?.scrollWidth;
  isShowArrow.value = tabsWidth! > boxWidth!;
}, 100));
</script>

<style lang="scss" scoped>
.tabs-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin: 10px 0;

}
.tabs {
  transition: all 1s ease 0s;
  display: flex;
  padding: 0;
  margin: 0;

  .tab-item {
    cursor: move;
    display: flex;
    padding: 8px 16px;
    background-color: #fff;
    margin-right: 10px;
    font-size: 14px;
    white-space: nowrap;
    &:last-child {
      margin-right: 0;
    }
  }
  .active {
    color: #2d8cf0;
  }
}

.bottom-arrow {
  cursor: pointer;
  background-color: #fff;
  padding: 8px;
}

.flip-drag-move {
  transition: transform 0.2s;
}

</style>
