<template>
  <div class="workplace">
    <el-row :gutter="10" class="row1">
      <el-col :span="24">
        <el-card>
          <template #header>
            <div style="font-size: 20px; text-align: left">工作台</div>
          </template>
          <div class="main">
            <div style="display: flex; align-items: center">
              <el-avatar :src="defaultAvatar" :size="64" />
              <div style="margin-left: 10px">
                <p style="font-size: 18px">早安，Ah jung，开始您一天的工作吧！</p>
                <p style="color: grey">今日阴转大雨，15℃ - 25℃，出门记得带伞哦。</p>
              </div>
            </div>
            <div style="display: flex; justify-content: center; width: 50%; text-align: right">
              <div
                v-for="item in workspaceList"
                :key="item.name"
                :style="{ width: `${(1 / workspaceList.length) * 100}%` }"
              >
                <p style="font-size: 16px">{{ item.name }}</p>
                <p style="font-size: 22px">{{ item.value }}</p>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row2">
      <el-col :span="12">
        <el-card class="project-card">
          <template #header>
            <div style="text-align: left; font-size: 18px">项目</div>
          </template>
          <div style="display: flex; flex-wrap: wrap">
            <el-card
              v-for="item in projectList"
              :key="item.name"
              style="width: 33.33%; box-sizing: border-box"
              shadow="hover"
            >
              <div style="text-align: left">
                <div style="display: flex; align-items: center">
                  <img :src="item.icon" alt="" />
                  <p style="margin-left: 10px; font-size: 16px">{{ item.name }}</p>
                </div>
                <p class="ellipsisRow-2" style="color: grey; min-height: 50px; margin-top: 5px;">{{ item.desc }}</p>
                <p>{{ `${item.tag} ${item.createDate}` }}</p>
              </div>
            </el-card>
          </div>
        </el-card>
        <el-card style="margin-top: 10px;">
          <template #header>
            <div style="text-align: left; font-size: 18px">动态</div>
          </template>
          <div class="dynamic-card-body">
            <div v-for="(item, index) in dynamicList" :key="item.name" style="margin: 5px 0;">
              <div style="display: flex; align-items: center;">
                <el-avatar :src="item?.avatar ?? defaultAvatar" />
                <div style="margin-left: 10px;">
                  <p style="font-size: 16px;">{{ item.text }}</p>
                  <span>{{ item.createTime }}</span>
                </div>
              </div>
              <el-divider v-if="index !== dynamicList.length - 1" />
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="project-card">
          <template #header>
            <div style="text-align: left; font-size: 18px">快捷操作</div>
          </template>
          <div style="display: flex; flex-wrap: wrap">
            <el-card
              v-for="item in quickOperateList"
              :key="item.name"
              style="width: 33.33%; box-sizing: border-box"
              shadow="hover"
            >
              <div style="display: flex; flex-direction: column; align-items: center">
                <img :src="item.icon" alt="" />
                <p style="margin-top: 5px">{{ item.name }}</p>
              </div>
            </el-card>
          </div>
        </el-card>
        <el-card style="margin-top: 10px;">
          <img style="width: 100%;" :src="workspaceBg" alt="" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import {
  defaultAvatar,
  githubIcon,
  taobaoIcon,
  weiboIcon,
  html5Icon,
  qqIcon,
  alipayIcon,
  speedometerIcon,
  listIcon,
  waitlistIcon,
  permissionsIcon,
  settingIcon,
  messageIcon,
  workspaceBg,
} from '@/utils/oss';

const workspaceList = [
  {
    name: '项目数',
    value: 16,
  },
  {
    name: '待办',
    value: '3/15',
  },
  {
    name: '消息',
    value: 35,
  },
];
const projectList = [
  {
    name: 'Github',
    desc: '是一个面向开源及私有软件项目的托管平台。',
    tag: '开源君',
    createDate: '2021-07-04',
    icon: githubIcon,
  },
  {
    name: '淘宝网',
    desc: '只有你想不到，没有你淘不到',
    tag: '购物天地',
    createDate: '2021-04-01',
    icon: taobaoIcon,
  },
  {
    name: 'Html5',
    desc: 'HTML5是互联网的下一代标准。',
    tag: '撸码也是一种艺术',
    createDate: '2021-04-01',
    icon: html5Icon,
  },
  {
    name: '微博',
    desc: '分享简短实时信息的社交平台。',
    tag: '分享君',
    createDate: '2021-07-04',
    icon: weiboIcon,
  },
  {
    name: '腾讯QQ',
    desc: '一款基于互联网的即时通信软件。',
    tag: '00后天地',
    createDate: '2021-07-04。',
    icon: qqIcon,
  },
  {
    name: '支付宝',
    desc: '致力于为企业和个人提供，简单、安全、快速、支付解决方案。',
    tag: '支付工具',
    createDate: '2021-07-04',
    icon: alipayIcon,
  },
];
const quickOperateList = [
  {
    name: '主控台',
    icon: speedometerIcon,
  },
  {
    name: '列表',
    icon: listIcon,
  },
  {
    name: '表单',
    icon: waitlistIcon,
  },
  {
    name: '权限管理',
    icon: permissionsIcon,
  },
  {
    name: '系统管理',
    icon: settingIcon,
  },
  {
    name: '消息',
    icon: messageIcon,
  },
];
const dynamicList = [
  {
    name: '武军',
    text: 'Ah Jung 刚才把工作台页面随便写了一些，凑合能看了！',
    createTime: '2021-07-04 22:37:16',
    avatar: defaultAvatar,
  },
  {
    name: '顾平',
    text: 'Ah Jung 在 开源组 创建了项目 naive-ui-admin？',
    createTime: '2021-07-04 09:37:16',
  },
  {
    name: '朱一龙',
    text: '@风清扬，向naive-ui-admin提交了一个bug，抽时间看看吧！',
    createTime: '2021-07-04 22:37:16',
  },
  {
    name: '何军',
    text: '技术部那几位童鞋，再次警告，不要摸鱼，不要摸鱼，不要摸鱼啦！',
    createTime: '2021-07-04 09:37:16',
  },
  {
    name: '夏勇',
    text: '上班不摸鱼，和咸鱼有什么区别（这话真不是我说的哈）！',
    createTime: '2021-07-04 20:37:16',
  },
];
</script>

<style lang="scss" scoped>
.workplace {
  font-size: 14px;
}

.el-row {
  margin-bottom: 10px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  text-align: left;
  box-sizing: border-box;
}

.grid-content-half {
  box-sizing: border-box;
}

.row1 {
  .grid-content {
    height: 228px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main {
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
}

.row2 {
  .project-card> ::v-deep(.el-card__body) {
    padding: 0;
  }
  .dynamic-card-body {
    text-align: left;
  }
}
</style>
