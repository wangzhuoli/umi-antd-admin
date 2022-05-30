import { ProTable } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';
import { Button, Space, Table } from 'antd';
import { useCallback } from 'react';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

interface TableListItem {
  username: string;
  sex: 0 | 1;
  mobile: string;
  address: string;
  age: number;
  create_time: number;
  id: number;
}

const tableDataSource: TableListItem[] = [];
let id = 1;

for (let i = 0; i < 200; i++) {
  tableDataSource.push({
    id: id,
    sex: id % 2 === 0 ? 0 : 1,
    create_time: new Date().getTime(),
    age: id + 10,
    address: '广东省惠州市博罗县',
    mobile: '13799999999',
    username: '用户' + (i + 1),
  });
  id++;
}

const ITable = () => {
  const doEdit = useCallback((value: TableListItem) => {}, []);
  const onPageChange = useCallback((page: number, pageSize: number) => {
    console.log(page, pageSize);
  }, []);
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '性别',
      valueType: 'select',
      valueEnum: {
        0: { text: '全部' },
        1: { text: '男' },
        2: { text: '女' },
      },
      dataIndex: 'sex',
      render: (value) => (value === 1 ? '男' : '女'),
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 200,
      align: 'center',
      render: (text, record) => {
        return (
          <Space>
            <Button onClick={doEdit.bind(this, record)}>编辑</Button>
            <Button>删除</Button>
          </Space>
        );
      },
    },
  ];
  return (
    <div style={{ padding: '20px' }}>
      <ProTable<TableListItem>
        dataSource={tableDataSource}
        columns={columns}
        rowKey={'id'}
        bordered
        cardBordered
        headerTitle={'高级表格'}
        rowSelection={{
          // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
          // 注释该行则默认不显示下拉选项
          // selections: [],
          defaultSelectedRowKeys: [],
        }}
        tableAlertRender={({
          selectedRowKeys,
          selectedRows,
          onCleanSelected,
        }) => (
          <span>
            已选 {selectedRowKeys.length} 项
            <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
              取消选择
            </a>
          </span>
        )}
        tableAlertOptionRender={() => {
          return (
            <Space size={16}>
              <a>批量删除</a>
              <a>导出数据</a>
            </Space>
          );
        }}
        pagination={{
          pageSize: 10,
          size: 'default',
          onChange: onPageChange,
        }}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            新建
          </Button>,
        ]}
      />
    </div>
  );
};

export default ITable;
