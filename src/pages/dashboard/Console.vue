<template>
  <div class="console">
    <el-row :gutter="10" class="row1">
      <el-col :span="12">
        <el-card class="grid-content main">
          <div>
            <p class="title">Element Plus</p>
            <p class="second-title">开箱即用的中台前端/设计解决方案</p>
            <p class="desc-item">内置常用模板，无需考虑交互排版，助你高效开发</p>
            <p class="desc-item">样式美观大方，无缝对接 Element Plus，随意组合页面，随心所欲</p>
            <p class="desc-item">丰富的布局模式，具有高可配性，满足您的各类布局需求</p>
            <p class="desc-item">优质的售后技术支持，完善的文档，让您事半功倍</p>
            <div class="rate-box" style="margin-top: 10px">
              <span style="margin-right: 5px">评价：</span>
              <el-rate
                v-model="rateValue"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value} 分"
              />
            </div>
            <div class="rate-box">
              <span style="margin-right: 5px">畅销：</span>
              <el-rate
                v-model="rateValue"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value} 分"
              />
            </div>
          </div>
          <img :src="consoleMain" alt="" />
        </el-card>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <el-row :gutter="10">
            <el-col :span="12">
              <el-card class="grid-content-half">
                <div class="half-box">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 10px">
                    <div>
                      <p class="title">访问量</p>
                      <p class="value">44,872</p>
                    </div>
                    <el-icon :size="36" color="#409eff">
                      <IMaterialSymbolsSignalCellularAlt />
                    </el-icon>
                  </div>
                  <div class="change-box">
                    <p class="label">增长幅度</p>
                    <el-tag type="success"> +7% </el-tag>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="grid-content-half">
                <div class="half-box">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 10px">
                    <div>
                      <p class="title">销售额</p>
                      <p class="value">￥84,388</p>
                    </div>
                    <el-icon :size="36" color="#e6a23c">
                      <IEpTrophy />
                    </el-icon>
                  </div>
                  <div class="change-box">
                    <p class="label">下降幅度</p>
                    <el-tag type="danger"> -3% </el-tag>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12">
              <el-card class="grid-content-half">
                <div class="half-box">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 10px">
                    <div>
                      <p class="title">订单量</p>
                      <p class="value">46,512</p>
                    </div>
                    <el-icon :size="36" color="#8dd16c">
                      <IRiMoneyCnyBoxLine />
                    </el-icon>
                  </div>
                  <div class="change-box">
                    <p class="label">下降幅度</p>
                    <el-tag type="danger"> -35% </el-tag>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="grid-content-half">
                <div class="half-box">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 10px">
                    <div>
                      <p class="title">成交额</p>
                      <p class="value">￥48,020</p>
                    </div>
                    <el-icon :size="36" color="#f78989">
                      <IRiMoneyDollarCircleLine />
                    </el-icon>
                  </div>
                  <div class="change-box">
                    <p class="label">增长幅度</p>
                    <el-tag type="success"> +23% </el-tag>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row2">
      <el-col :span="18">
        <el-card class="grid-content">
          <template #header>
            <span style="font-size: 16px">会员增长趋势</span>
          </template>
          <div ref="myChartDom" style="width: 100%; height: 251px" />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="grid-content second">
          <div style="text-align: center">
            <img style="margin-bottom: 10px; width: 60px;" :src="adminIcon" alt="" />
            <p style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">NaiveAdmin</p>
            <p style="font-size: 12px; margin-bottom: 10px;">开箱即用的中台前端<br />设计解决方案</p>
            <el-button style="margin-bottom: 10px;" type="primary">去官网看看</el-button>
            <div>
              <el-tag color="#7816ff" style="color: #fff;" type="success">多生态支持</el-tag>
              <el-tag color="#00b42a" style="color: #fff; margin: 0 10px;" type="success">丰富功能</el-tag>
              <el-tag color="#ff7d00" style="color: #fff;" type="success">实用组件</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row3">
      <el-col :span="18">
        <el-card class="grid-content">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
            <el-table-column fixed="right" label="Operations" width="120">
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
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="grid-content second">
          <template #header>
            <span style="font-size: 16px">评论</span>
          </template>
          <div>
            <div v-for="item in commentList" :key="item.name" style="display: flex;justify-content: space-between; margin: 10px 0;">
              <div style="display: flex; align-items: center;">
                <el-avatar :src="item?.avatar ?? defaultAvatar" />
                <div style="margin-left: 10px;">
                  <p>{{ item.name }}</p>
                  <p>{{ item.text }}</p>
                </div>
              </div>
              <span>{{ item.time }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { getFromTodaysTime } from '@/utils/date';
import { adminIcon, defaultAvatar } from '@/utils/oss';
import consoleMain from '@/assets/svg/consoleMain.svg';

const myChartDom = ref(null);

onMounted(() => {
  const myChart = echarts.init(myChartDom.value!);

  myChart.setOption({
    tooltip: {},
    grid: {
      top: '15%',
      left: '35px',
      right: '35px',
      bottom: '35px',
    },
    legend: {
      data: [
        {
          name: '粉丝总量',
          itemStyle: {
            color: '#fc619d',
          },
          lineStyle: {
            color: '#fc619d',
          },
        },
        {
          name: '月销量',
          itemStyle: {
            color: '#1990ff',
          },
        },
      ],
    },
    xAxis: {
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yAxis: {},
    series: [
      {
        name: '粉丝总量',
        type: 'line',
        data: [200, 283, 302, 267, 386, 388, 435, 465, 487, 531, 589, 669],
        itemStyle: {
          color: '#fc619d',
        },
        lineStyle: {
          color: '#fc619d',
        },
      },
      {
        name: '月销量',
        type: 'bar',
        data: [105, 180, 208, 284, 343, 315, 316, 386, 421, 543, 421, 321],
        barWidth: 10,
        itemStyle: {
          color: '#1990ff',
          borderRadius: [5, 5, 0, 0],
        },
      },
    ],
  });
});

const rateValue = ref(5);

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
const commentList = [
  {
    name: '武军',
    text: '这个系统太好用了',
    time: getFromTodaysTime(1676908800000),
    avatar: defaultAvatar,
  },
  {
    name: '顾平',
    text: 'UI界面有两下子',
    time: getFromTodaysTime('2021-6-25'),
  },
  {
    name: '朱一龙',
    text: '给作者点赞',
    time: getFromTodaysTime('2021-2-11'),
  },
  {
    name: '何军',
    text: '颜值有点高呀',
    time: getFromTodaysTime('2020-4-21'),
  },
  {
    name: '夏勇',
    text: '还是多提宝贵建议吧',
    time: getFromTodaysTime('2024-1-21'),
  },
];
</script>

<style lang="scss" scoped>
.console {
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
  .main ::v-deep(.el-card__body) {
    display: flex;
    justify-content: space-between;
  }

  .grid-content {
    height: 300px;
  }

  .grid-content-half {
    box-sizing: border-box;
    height: 145px;
  }
}

.row2 {
  .second {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-content {
    height: 350px;
  }
}

.main {
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .second-title {
    margin-bottom: 10px;
  }

  .desc-item {
    display: flex;
    align-items: center;

    &::before {
      content: '';
      width: 5px;
      height: 5px;
      background-color: #909399;
      border-radius: 50%;
      margin-right: 5px;
    }
  }

  .rate-box {
    display: flex;
    align-items: center;
  }
}

.half-box {
  font-size: 16px;

  .title {
    margin-bottom: 5px;
  }

  .value {
    font-weight: bold;
    font-size: 20px;
  }

  .change-box {
    display: flex;
    font-size: 14px;

    .label {
      margin-right: 10px;
    }
  }
}
</style>

