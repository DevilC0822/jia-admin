<template>
  <div>user</div>
</template>

<script setup lang="ts">
import userApi from '@/service/api/user';
import axios from '@/service/http';

onMounted(() => {
  userApi.getUserList({
    size: 10,
    current: 1,
  }).then((res) => {
    console.log(res);
  });
  axios.post('/mock/api/getList').then((res) => {
    console.log(res);
  });
  axios.get('/api/getUser').then((res) => {
    console.log(res);
  });
});

</script>