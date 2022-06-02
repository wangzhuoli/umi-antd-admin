import http from '@/services/http';

/**
 * 登录
 * */
export const login = (data: { username: string; password: string }) =>
  http({ url: '/api/user/login', method: 'post', data });

/**
 * 获取用户信息
 * */
export const fetchUserInfo = () =>
  http<API.CurrentUser>({ url: '/api/user/info', method: 'get' });
