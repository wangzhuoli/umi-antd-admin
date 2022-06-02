import { MenuDataItem } from '@umijs/route-utils';

const routes: MenuDataItem[] = [
  {
    path: '/',
    component: '@/pages/home/index',
    name: '首页',
    icon: 'home',
  },
  {
    path: '/table',
    component: '@/pages/table/index',
    name: '高级表格',
    icon: 'table',
  },
  {
    layout: false,
    path: '/user',
    component: '@/layouts/UserLayout',
    routes: [
      {
        path: '/user/login',
        component: '@/pages/user/login/index',
        name: '登录',
      },
    ],
  },
];
export default routes;
