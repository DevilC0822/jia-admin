import http from '@/service/http';
import * as T from './types';

const login = (params: T.ILoginParams) => {
  return http.post('/login', params);
};

export default {
  login,
};
