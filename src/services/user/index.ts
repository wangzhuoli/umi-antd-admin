export const login = (params: any) => ({
  url: '/api/user/login',
  method: 'POST',
  ...params,
});
