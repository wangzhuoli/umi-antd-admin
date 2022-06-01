import { useRequest } from 'umi';
import {
  RequestServiceObject,
  BaseOptions,
} from '@ahooksjs/use-request/lib/types';

export default <R, P>(
  service: RequestServiceObject,
  options: BaseOptions<R, P[]>,
) => {
  return useRequest(service, options);
};
