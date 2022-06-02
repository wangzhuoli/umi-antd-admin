import React from 'react';
import { history } from 'umi';
import './app.less';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import RightContent from '@/layouts/RightContent';
import Footer from '@/layouts/Footer';
import { fetchUserInfo } from '@/services/user';

export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings; currentUser?: API.CurrentUser };
}): BasicLayoutProps => {
  return {
    rightContentRender: () => <RightContent />,
    footerRender: () => <Footer />,
    breadcrumbRender: (routers = []) => [
      {
        path: '/',
        breadcrumbName: '主页',
      },
      ...routers,
    ],
    onPageChange: () => {
      const { currentUser } = initialState;
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!currentUser && location.pathname !== '/user/login') {
        history.push('/user/login');
      }
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};

/**
 * 开启 plugin-initial-state
 * */
export async function getInitialState() {
  const token = localStorage.getItem('token');
  if (token) {
    // 获取用户信息
    const data = await fetchUserInfo();
    return { currentUser: data.data };
  }
  return {};
}
