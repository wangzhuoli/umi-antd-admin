import mock, { Random } from 'mockjs';

export default {
  'POST /api/user/login': {
    data: {
      token: mock.mock(Random.guid()),
    },
    msg: '',
  },
  'GET /api/user/info': {
    data: {
      username: mock.mock(Random.name()),
      headUrl:
        'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    },
    msg: '',
  },
};
