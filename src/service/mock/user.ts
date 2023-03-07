import * as Mock from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';

type Recordable<T = any> = Record<string, T>;

interface IOpt {
  url: Recordable;
  body: Recordable;
  query: Recordable;
  headers: Recordable;
}

const { Random } = Mock;
const originList: any[] = [];
const count = 100;

for (let i = 0; i < count; i++) {
  originList.push({
    userName: Random.cname(),
    backgroundColor: Random.color(),
    analysisStatus: Random.first(),
    phone: Random.natural(10000000000, 19999999999),
    email: Random.email(),
    sex: Random.boolean() ? '男' : '女',
    role: Random.natural(0, 3),
    status: Random.boolean(),
    createdAt: Random.datetime('y-MM-dd HH:mm:ss'),
  });
}

export default [
  {
    url: '/mock/api/getUserList',
    method: 'post',
    response: (opt: IOpt) => {
      const { size, current } = opt.body;
      if (!size || !current) {
        return {
          code: 200,
          message: '页码和页大小不能为空',
          data: null,
        };
      }
      const total = originList.length;
      const len = total / size;
      const pages = Number.isInteger(len) ? len : Math.ceil(len);
      const data = originList.slice((current - 1) * size, current * size);
      return {
        code: 200,
        message: '',
        data: {
          current,
          size,
          total,
          pages,
          list: data,
        }
      };
    },
  },
] as MockMethod[];