import request from 'umi-request';
import { message } from 'antd';

/**
 * 响应codeMap
 * */
const responseCodeMap = {
  401: '暂无操作权限',
  500: '服务不可用，服务器暂时过载或维护。',
  502: '网关错误。',
  404: '请求不存在。',
};

/**
 * 请求拦截
 * */
request.interceptors.request.use((url, options) => {
  return {
    url,
    options: { ...options, headers: {} },
  };
});

/**
 * 响应拦截
 * */
request.interceptors.response.use(async (response) => {
  if (response.status !== 200) {
    // http状态码不等于200时，发生错误
    // @ts-ignore
    let errorMsg = responseCodeMap[response.status] || response.statusText;
    if (response.status === 403) {
      // 403 前端请求参数错误 ｜ 后端执行错误
      const { msg } = await response.clone().json();
      errorMsg = msg;
    }
    if (errorMsg) {
      // 统一报错提示
      message.error(errorMsg);
    }
  }
  return response;
});

interface RequestProps {
  url: string;
  method: 'get' | 'post' | 'delete' | 'put' | 'download';
  data?: Object;
  params?: Object;
}

export default <R>(
  props: RequestProps,
): Promise<{ data: R | undefined; msg: string }> => {
  const { url, method, params = {}, data = {} } = props;
  return new Promise((resolve, reject) => {
    // @ts-ignore
    request[method](url, { params, data })
      .then((res: { data: R; msg: string }) => {
        resolve(res);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
