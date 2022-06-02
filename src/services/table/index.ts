import http from '@/services/http';

/**
 * 获取数据列表
 * */
export const fetchTableList = (params: any) =>
  http<{ list: API.TableListItem[]; total: number }>({
    url: '/api/table/list',
    method: 'get',
    params,
  });
