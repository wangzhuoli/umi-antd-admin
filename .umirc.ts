import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  mfsu: {},
  layout: {
    name: 'Antd Pro',
    locale: false,
    layout: 'side',
  },
  routes,
});
