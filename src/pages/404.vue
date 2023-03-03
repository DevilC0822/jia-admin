<template>
  <div class="box404">
    <img class="svg404" :src="svg404" alt="" />
    <span>抱歉，你访问的页面不存在</span>
    <el-button type="primary" style="width: 88px;">回到首页</el-button>
  </div>
</template>

<script lang="ts" setup>
import svg404 from '@/assets/svg/404.svg';
</script>

<style lang="scss" scoped>
.box404 {
  height: 100vh;
  background-color: #f5f7f9;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.svg404 {
  width: 350px;
  margin: 0px auto;
}
</style>