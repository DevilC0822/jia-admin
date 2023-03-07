import http from '@/service/http';
import * as T from './types';

const getUserList = (params: T.IGetUserList) => {
  return http.post('/mock/api/getUserList', params);
};

export default {
  getUserList,
};
