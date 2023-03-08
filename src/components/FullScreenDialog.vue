<template>
  <div class="FullScreenDialog">
    <el-dialog v-bind="$attrs" :show-close="false">
      <!-- Header Slot 增加全屏按钮 -->
      <template #header="scoped">
        <div class="dialog-header">
          <span>{{ props?.title ?? '' }}</span>
          <div style="position: absolute; right: 0;">
            <el-tooltip
              v-if="!fullScreenStatus"
              effect="dark"
              content="全屏"
              placement="bottom"
            >
              <el-icon :size="24" @click="fullScreenToggle">
                <IMdiFullscreen />
              </el-icon>
            </el-tooltip>
            <el-tooltip
              v-if="fullScreenStatus"
              effect="dark"
              content="退出全屏"
              placement="bottom"
            >
              <el-icon :size="25" @click="fullScreenToggle">
                <IMdiFullscreenExit />
              </el-icon>
            </el-tooltip>
            <el-icon
              :size="24"
              @click="() => {
                if (fullScreenStatus) {
                  screenfull.toggle();
                  fullScreenStatus = false;
                }
                scoped.close();
              }"
            >
              <IMdiClose />
            </el-icon>
          </div>
        </div>
      </template>
      <!-- Dialog Content Slot -->
      <slot />
      <template #footer>
        <slot name="footer" />
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import screenfull from 'screenfull';
import { ElMessage } from 'element-plus';

const props = defineProps<{title: string}>();

const fullScreenStatus = ref(false);
const fullScreenToggle = () => {
  if (!screenfull.isEnabled) {
    ElMessage({
      message: '不支持全屏',
      type: 'warning',
    });
    return;
  }
  if (fullScreenStatus.value) {
    screenfull.toggle();
  } else {
    screenfull.request(document.querySelector('.FullScreenDialog .el-dialog')!);
  }
  fullScreenStatus.value = !fullScreenStatus.value;
};
</script>

<style scoped lang="scss">
.FullScreenDialog ::v-deep(.el-dialog__header) {
  margin-right: 0;
}
.dialog-header {
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;

  i {
    cursor: pointer;
    margin: 0 3px;
  }
}
</style>