import type * as T from '@/types/menu';

export interface IData {
  name: string
  value: string
  titleSlot: boolean
  iconName: string
  children: T.IChildMenu[]
}

const data: IData[] = [
  {
    name: 'Dashboard',
    value: 'dashboard',
    titleSlot: true,
    iconName: 'house',
    children:[
      {
        sign: 'Dashboard',
        name: '主控台',
        value: 'console',
        router: '/dashboard/console',
        isClosable: false,
      },
      {
        sign: 'Dashboard',
        name: '监控页',
        value: 'monitor',
        router: '/dashboard/monitor',
      },
      {
        sign: 'Dashboard',
        name: '工作台',
        value: 'workplace',
        router: '/dashboard/workplace',
      },
    ],
  },
  {
    name: '系统管理',
    value: 'system',
    titleSlot: true,
    iconName: 'HelpFilled',
    children:[
      {
        sign: '系统管理',
        name: '用户管理',
        value: 'user',
        router: '/system/user',
      },
      {
        sign: '系统管理',
        name: '菜单管理',
        value: 'menu',
        router: '/system/menu',
      },
      {
        sign: '系统管理',
        name: '角色管理',
        value: 'role',
        router: '/system/role',
      },
      {
        sign: '系统管理',
        name: '字典管理',
        value: 'dictionary',
        router: '/system/dictionary',
      },
    ],
  },
  {
    name: '列表页面',
    value: 'list',
    titleSlot: true,
    iconName: 'HelpFilled',
    children:[
      {
        sign: '列表页面',
        name: '基础列表',
        value: 'basic-list',
        router: '/list/basic-list',
      },
    ],
  },
];
export default data;
