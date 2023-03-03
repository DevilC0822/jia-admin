import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useMenuStore } from '@/store/menu';
import menuData from '@/layout/menuData';
import NProgress from 'nprogress';

// NProgress.configure({
//   easing: 'ease', // 动画方式
//   speed: 1000, // 递增进度条的速度
//   showSpinner: false, // 是否显示加载ico
//   trickleSpeed: 200, // 自动递增间隔
//   minimum: 0.3, // 更改启动时使用的最小百分比
//   parent: 'body', //指定进度条的父容器
// });

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/Layout.vue'),
    redirect: '/dashboard/console',
    children: [
      {
        path: '/dashboard/console',
        name: 'console',
        component: () => import('@/pages/dashboard/Console.vue'),
        meta: {
          sign: 'Dashboard',
        },
      },
      {
        path: '/dashboard/monitor',
        name: 'monitor',
        component: () => import('@/pages/dashboard/Monitor.vue'),
        meta: {
          sign: 'Dashboard',
        },
      },
      {
        path: '/dashboard/workplace',
        name: 'workplace',
        component: () => import('@/pages/dashboard/Workplace.vue'),
        meta: {
          sign: 'Dashboard',
        },
      },
      {
        path: '/system/user',
        name: 'user',
        component: () => import('@/pages/system/User.vue'),
        meta: {
          sign: '系统管理',
        },
      },
      {
        path: '/system/menu',
        name: 'menu',
        component: () => import('@/pages/system/Menu.vue'),
        meta: {
          sign: '系统管理',
        },
      },
      {
        path: '/system/role',
        name: 'role',
        component: () => import('@/pages/system/Role.vue'),
        meta: {
          sign: '系统管理',
        },
      },
      {
        path: '/system/dictionary',
        name: 'dictionary',
        component: () => import('@/pages/system/Dictionary.vue'),
        meta: {
          sign: '系统管理',
        },
      },
      {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('@/pages/404.vue'),
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (Object.prototype.hasOwnProperty.call(to.params, 'catchAll')) {
    next();
    NProgress.done();
    return;
  }
  const { sign = '' } = to.meta;
  const menuStore = useMenuStore();

  const currentMenuList = menuData.find((menu) => sign === menu.name)?.children; 
  menuStore.currentMenuList = currentMenuList!;
  menuStore.currentMenu = currentMenuList?.find((i) => i.router === to.path);
  if (!menuStore.openedMenuList.find((i) => i?.router === to.path)) {
    menuStore.openedMenuList.push(menuStore.currentMenu!);
  }
  NProgress.done();
  next();
});

export default router;
