import http from '@/service/http';
import * as T from './types';

const getUserList = (params: T.IGetUserList) => {
  return http.get('/api/table/list', params);
};

export default {
  getUserList,
};
