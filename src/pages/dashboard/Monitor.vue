<template>
  <div class="monitor">
    <el-row :gutter="10" class="row1">
      <el-col :span="6">
        <el-card class="grid-content">
          <template #header>
            <div class="card-header">
              <span style="font-size: 18px;">访问量</span>
              <el-tag type="success">日</el-tag>
            </div>
          </template>
          <div class="main">
            <span style="font-size: 36px; font-weight: bold;">42,234</span>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
              <span>日同比 87%</span>
              <span>周同比 81%</span>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 15px;">
            <span>总访问量：</span>
            <span>787,454</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="grid-content">
          <template #header>
            <div class="card-header">
              <span style="font-size: 18px;">销售额</span>
              <el-tag>周</el-tag>
            </div>
          </template>
          <div class="main">
            <span style="font-size: 36px; font-weight: bold;">￥75,119</span>
            <el-progress style="margin-top: 15px;" :percentage="70" />
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 15px;">
            <span>总销售额：</span>
            <span>￥298,169</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="grid-content">
          <template #header>
            <div class="card-header">
              <span style="font-size: 18px;">订单量</span>
              <el-tag type="warning">周</el-tag>
            </div>
          </template>
          <div class="main">
            <span style="font-size: 36px; font-weight: bold;">66,581</span>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
              <span>日同比 35%</span>
              <span>周同比 74%</span>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 15px;">
            <span>转化率：</span>
            <span>777,611%</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="grid-content">
          <template #header>
            <div class="card-header">
              <span style="font-size: 18px;">成交额</span>
              <el-tag type="danger">月</el-tag>
            </div>
          </template>
          <div class="main">
            <span style="font-size: 36px; font-weight: bold;">￥27,850</span>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
              <span>日同比 38%</span>
              <span>月同比 48%</span>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 15px;">
            <span>总成交额：</span>
            <span>￥291,806</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row2">
      <el-col :span="3">
        <el-card class="grid-content">
          <div class="main">
            <el-icon :size="28" color="#7cc8ff">
              <IRiUserAddLine />
            </el-icon>
            <span>用户</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="grid-content">
          <div class="main">
            <el-icon :size="28" color="#69c0ff">
              <IRiBarChartGroupedFill />
            </el-icon>
            <span>分析</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="grid-content">
          <div class="main">
            <el-icon :size="28" color="#ff9c6e">
              <IRiLuggageCartLine />
            </el-icon>
            <span>商品</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="grid-content">
          <div class="main">
            <el-icon :size="28" color="#b37feb">
              <IRiMoneyCnyBoxLine />
            </el-icon>
            <span>订单</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="grid-content">
          <div class="main">
            <el-icon :size="28" color="#ffd666">
              <IRiCoupon4Line />
            </el-icon>
            <span>票据</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="grid-content">
          <div class="main">
            <el-icon :size="28" color="#5cdbd3">
              <IRiMessage2Line />
            </el-icon>
            <span>消息</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="grid-content">
          <div class="main">
            <el-icon :size="28" color="#ff94c8">
              <IRiPriceTag3Line />
            </el-icon>
            <span>标签</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card class="grid-content">
          <div class="main">
            <el-icon :size="28" color="#ffc069">
              <IRiSettings5Line />
            </el-icon>
            <span>配置</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row3">
      <el-col :span="18">
        <el-card class="grid-content">
          <template #header>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="font-size: 18px; display: flex;">
                <el-icon :size="22" color="#e9ae55">
                  <IRiTodoLine />
                </el-icon>
                <span style="margin-left: 5px;">待办任务</span>
              </div>
              <el-button text type="primary">更多</el-button>
            </div>
          </template>
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
          <div ref="trafficSourceChartRef" style="width: 100%; height: 209px" />
          <el-table :data="trafficSource" style="width: 100%">
            <el-table-column prop="name" label="来源" />
            <el-table-column prop="value" label="收入" />
            <el-table-column prop="value" label="占比">
              <template #default="scope">
                {{ ((scope.row.value / trafficSource.reduce((x, y) => x + y.value, 0)) * 100).toFixed(2) + '%' }}
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row4">
      <el-col :span="24">
        <el-card>
          <el-tabs v-model="activeName" @tab-change="handleTabsClick">
            <el-tab-pane label="流量趋势" name="trend">
              <div ref="trendChartRef" style="width: 100%; height: 280px" />
            </el-tab-pane>
            <el-tab-pane label="访问量" name="count">
              <div ref="countChartRef" style="width: 100%; height: 280px" />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import type { TabPaneName } from 'element-plus';

const tableData = [{
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
const trafficSourceChartRef = ref(null);
const trafficSource = [
  {
    name: '互联网',
    value: 525,
  },
  {
    name: '实体门店',
    value: 305,
  },
  {
    name: '境外',
    value: 134,
  },
  {
    name: '其他',
    value: 60,
  },
];
onMounted(() => {
  const trafficSourceChart = echarts.init(trafficSourceChartRef.value!);
  trafficSourceChart.setOption({
    series: [
      {
        
        type: 'pie',
        radius: ['40%', '70%'],
        label: {
          show: true,
          position: 'outside',
        },
        emphasis: {
          label: {
            show: true,
          }
        },
        data: trafficSource,
      }
    ]
  });
});

const activeName = ref('trend');
const trendChartRef = ref(null);
const countChartRef = ref(null);
let countChart: any;
const handleTabsClick = (tab: TabPaneName) => {
  if (tab === 'count' && !countChart) {
    setTimeout(() => {
      countChart = echarts.init(countChartRef.value!);
      countChart.setOption({
        tooltip: {},
        grid: {
          top: '5%',
          left: '35px',
          right: '35px',
          bottom: '35px',
        },
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
        yAxis: {},
        series: [
          {
            name: '访问量',
            type: 'bar',
            data: [200, 283, 302, 267, 386, 388, 435, 465, 487, 531, 589, 669],
            itemStyle: {
              color: '#3baeea',
            },
          },
        ],
      });
    }, 100);
  }
};
onMounted(() => {
  const trendChart = echarts.init(trendChartRef.value!);
  trendChart.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      top: '5%',
      left: '35px',
      right: '35px',
      bottom: '35px',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        spliteLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: '#000',
          },
        },
        data: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
      }
    ],
    yAxis: [
      {
        type: 'value',
      }
    ],
    series: [
      {
        name: '趋势1',
        type: 'line',
        areaStyle: {},
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: [111, 222, 4000, 18000, 33333, 55555, 66666, 33333, 14000, 36000, 66666, 44444, 22222, 11111, 4000, 2000, 555, 333]
      },
      {
        name: '趋势2',
        type: 'line',
        areaStyle: {},
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: [33, 66, 88, 333, 333, 18000, 3000, 1800, 1200, 13000, 22000, 11000, 2221, 1201, 390, 198, 60, 30]
      },
    ]
  });
});
</script>

<style lang="scss" scoped>
.monitor {
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
    min-height: 70px;
    padding-bottom: 15px;
    border-bottom: 1px solid #dcdfe6;
  }
}

.row2 {
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>