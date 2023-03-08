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
const count = 888;

for (let i = 0; i < count; i++) {
  originList.push({
    userName: Random.cname(),
    backgroundColor: Random.color(),
    loginAccount: Random.first(),
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
      const { size, current, ...other } = opt.body;
      if (!size || !current) {
        return {
          code: 200,
          message: '页码和页大小不能为空',
          data: null,
        };
      }
      const result: any[] = originList.filter((item) => {
        return item.userName.includes(other.userName) &&
        item.loginAccount.includes(other.loginAccount) &&
        String(item.phone).includes(String(other.phone)) &&
        item.userName.includes(other.userName) &&
        (String(other.role) ? item.role === other.role : 1) &&
        (String(other.status) ? item.status === other.status : 1);
      });

      const total = result.length;
      const len = total / size;
      const pages = Number.isInteger(len) ? len : Math.ceil(len);
      const data = result.slice((current - 1) * size, current * size);
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