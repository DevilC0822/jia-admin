<template>
  <div class="header">
    <div style="display: flex; align-items: center">
      <el-icon v-if="!props.collapseStatue" :size="20" @click="closeCollapse">
        <IEpFold />
      </el-icon>
      <el-icon v-if="props.collapseStatue" :size="20" @click="openCollapse">
        <IEpExpand />
      </el-icon>
      <el-icon style="margin: 0 20px" :size="18">
        <IEpRefreshRight />
      </el-icon>
      <div style="display: flex; align-items: center; font-size: 12px;">
        <el-dropdown>
          <span>{{ menuStore.currentMenu?.sign }}</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="item in menuStore.currentMenuList"
                :key="item.value"
                @click="router.push(item.router)"
              >
                {{ item.name }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span style="margin: 0 5px;">/</span>
        <span>{{ menuStore.currentMenu?.name }}</span>
      </div>
    </div>
    <div style="display: flex; align-items: center">
      <el-icon style="margin-right: 20px" :size="18">
        <IEpSearch />
      </el-icon>
      <el-icon style="margin-right: 20px" :size="18">
        <IMdiGithub />
      </el-icon>
      <el-icon style="margin-right: 20px" :size="18">
        <IEpLock />
      </el-icon>
      <el-icon style="margin-right: 20px" :size="18" @click="changeFullScreen">
        <IEpFullScreen />
      </el-icon>
      <el-icon style="margin-right: 20px" :size="18">
        <IEpBell />
      </el-icon>
      <el-avatar :size="32" :src="circleUrl" style="cursor: pointer" />
      <el-icon style="margin-left: 20px" :size="18">
        <IEpSetting />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import screenfull from 'screenfull';
import { useMenuStore } from '@/store/menu';
import { defaultAvatar } from '@/utils/oss';

interface IProps {
  collapseStatue: boolean
}
const menuStore = useMenuStore();

const router = useRouter();
const props = defineProps<IProps>();
const emits = defineEmits(['closeCollapse', 'openCollapse']);
const circleUrl = ref(defaultAvatar);

const closeCollapse = () => {
  emits('closeCollapse');
};
const openCollapse = () => {
  emits('openCollapse');
};

const changeFullScreen = () => {
  if (!screenfull.isEnabled) {
    ElMessage({
      message: '不支持全屏',
      type: 'warning',
    });
    return;
  }
  screenfull.toggle();
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .el-icon {
    cursor: pointer;
  }
}
</style>
