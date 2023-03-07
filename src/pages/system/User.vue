<template>
  <div class="user">
    <el-card>
      <el-form
        :label-width="80"
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
      >
        <el-row class="form-row">
          <el-col :span="6">
            <el-form-item label="用户名">
              <el-input v-model="formInline.userName" placeholder="请输入用户名" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="登录账号">
              <el-input v-model="formInline.loginAccount" placeholder="请输入登录账号" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="手机">
              <el-input v-model="formInline.phone" placeholder="请输入手机号码" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="角色">
              <el-select v-model="formInline.role" placeholder="请选择角色">
                <el-option label="普通用户" :value="0" />
                <el-option label="推广管理员" :value="1" />
                <el-option label="发货管理员" :value="2" />
                <el-option label="财务管理员" :value="3" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="邮箱">
              <el-input v-model="formInline.email" placeholder="请输入邮箱" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="状态">
              <el-select v-model="formInline.status" placeholder="请选择状态">
                <el-option label="正常" :value="true" />
                <el-option label="禁用" :value="false" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item style="margin-left: 40px;">
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <el-button @click="reset">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card style="margin-top: 10px;">
      <div style="display: flex; justify-content: space-between;">
        <div>
          <el-button type="primary">
            <el-icon style="margin-right: 5px;">
              <IMdiPlus />
            </el-icon>
            新建
          </el-button>
          <el-button type="danger" :disabled="multipleSelection.length === 0">
            <el-icon style="margin-right: 5px;">
              <IMdiDelete />
            </el-icon>
            删除
          </el-button>
          <el-button>
            <el-icon style="margin-right: 5px;">
              <ISystemImport />
            </el-icon>
            导入
          </el-button>
        </div>
        <div class="right-box" style="display: flex; align-items: center;">
          <el-tooltip
            effect="dark"
            content="表格斑马纹"
            placement="bottom"
          >
            <el-switch v-model="tableZebraSwitch" />
          </el-tooltip>
          <el-divider direction="vertical" />
          <el-tooltip
            effect="dark"
            content="刷新"
            placement="bottom"
          >
            <el-icon :size="18">
              <IEpRefresh />
            </el-icon>
          </el-tooltip>
          <el-dropdown>
            <el-icon :size="18">
              <IMdiArrowExpandVertical />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="() => {tableFontSize = 12}">紧凑</el-dropdown-item>
                <el-dropdown-item @click="() => {tableFontSize = 14}">默认</el-dropdown-item>
                <el-dropdown-item @click="() => {tableFontSize = 16}">宽松</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          
          <el-tooltip
            effect="dark"
            content="列设置"
            placement="bottom"
          >
            <el-icon :size="18">
              <IEpSetting />
            </el-icon>
          </el-tooltip>
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
        </div>
      </div>
      <el-table
        :stripe="tableZebraSwitch"
        :data="tableData"
        style="width: 100%; margin-top: 20px;"
        :style="{fontSize: `${tableFontSize}px`}"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="userName" label="用户名" />
        <el-table-column prop="userName" label="头像">
          <template #default="scope">
            <el-avatar shape="square" style="white-space: nowrap;" :style="{backgroundColor: scope.row.backgroundColor}">
              {{ scope.row.userName }}
            </el-avatar>
          </template>
        </el-table-column>
        <el-table-column prop="userName" label="登录账号">
          <template #default="scope">
            {{ pinyin(scope.row?.userName ?? '', { toneType: 'none' }) }}
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="手机号" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column prop="sex" label="性别">
          <template #default="scope">
            <el-tag :type="scope.row.sex === '男' ? 'success' : 'danger'">{{ scope.row.sex }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="role" label="角色">
          <template #default="scope">
            <el-tag>{{ roleMap[scope.row.role] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态">
          <template #default="scope">
            <el-tag :type="scope.row.status ? 'success' : 'danger'">{{ scope.row.status ? '正常' : '禁用' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="创建时间" />
        <el-table-column fixed="right" label="操作">
          <template #default>
            <div style="display: flex; align-items: center;">
              <el-button link type="primary" size="small">编辑</el-button>
              <el-divider direction="vertical" />
              <el-button
                style="margin-left: 0;"
                link
                type="primary"
                size="small"
              >
                删除
              </el-button>
              <el-divider direction="vertical" />
              <el-button
                style="margin-left: 0;"
                link
                type="primary"
                size="small"
              >
                更多
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-model:page-size="paginationInfo.size"
        v-model:current-page="paginationInfo.current"
        style="justify-content: end; margin-top: 20px;"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="paginationTotal"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import screenfull from 'screenfull';
import { ElMessage } from 'element-plus';
import { pinyin } from 'pinyin-pro';
import userApi from '@/service/api/user';

interface IUser {
  [propsName: string]: any
  userName: string
  backgroundColor: string
  analysisStatus: string
  phone: number
  email: string
  sex: string
  status: boolean
  createdAt: string
}
const roleMap: {
  [propsName: string]: string
} = {
  0: '普通用户',
  1: '推广管理员',
  2: '发货管理员',
  3: '财务管理员',
};

const formInline = ref({
  userName: '',
  loginAccount: '',
  phone: '',
  role: '',
  email: '',
  status: '',
});
const paginationInfo = ref({
  size: 10,
  current: 1,
});
const paginationTotal = ref(0);

const onSubmit = () => {
  searchTable();
};
const reset = () => {
  formInline.value = {
    userName: '',
    loginAccount: '',
    phone: '',
    role: '',
    email: '',
    status: '',
  };
  paginationInfo.value = {
    size: 10,
    current: 1,
  };
  searchTable();
};

const multipleSelection = ref<IUser[]>([]);
const handleSelectionChange = (val: IUser[]) => {
  multipleSelection.value = val;
};

const tableZebraSwitch = ref(false);
const tableFontSize = ref(14);
const fullScreenStatus = ref(false);
const fullScreenToggle = () => {
  if (!screenfull.isEnabled) {
    ElMessage({
      message: '不支持全屏',
      type: 'warning',
    });
    return;
  }
  screenfull.toggle();
  fullScreenStatus.value = !fullScreenStatus.value;
};
const tableData = ref<IUser[]>([]);


function searchTable() {
  const params = {
    ...formInline.value,
    ...paginationInfo.value,
  };
  userApi.getUserList(params).then((res) => {
    if (!res.data) {
      ElMessage({
        message: res.message,
        type: 'error',
      });
      return;
    }
    tableData.value = res.data.list;
    paginationTotal.value = res.data.total;
  });
}

onMounted(() => {
  searchTable();
});

watch(paginationInfo, () => {
  searchTable();
}, { deep: true });

</script>

<style scoped lang="scss">
.form-row {
  margin-top: 18px;

  ::v-deep(.el-form-item) {
    width: 100%;
    margin-right: 0;
  }

  ::v-deep(.el-select) {
    width: 100%;
  }
}

.right-box {
  ::v-deep(.el-icon) {
    margin: 0 5px;
  }
}
</style>