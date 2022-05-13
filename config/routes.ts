import { MenuDataItem } from '@umijs/route-utils';

const routes: MenuDataItem[] = [
  {
    path: '/',
    component: '@/pages/home/index',
    name: '首页',
    icon: 'home',
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
