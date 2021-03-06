import mock, { Random } from 'mockjs';

export default {
  'GET /api/table/list': {
    data: mock.mock({
      'list|100': [
        {
          id: '@id',
          username: '@name',
          'sex|1-2': 1,
          'age|1-99': 1,
          mobile: /^1[34578]\d{9}$/,
          create_time: '@datetime',
        },
      ],
      'total|100': 100,
    }),
    msg: '',
  },
};
