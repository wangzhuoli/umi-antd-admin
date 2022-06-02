import { ProTable } from '@ant-design/pro-components';
import type { ProColumns } from '@ant-design/pro-components';
import { Button, Space, Table } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { fetchTableList } from '@/services/table';

const ITable = () => {
  const doEdit = useCallback((value: API.TableListItem) => {}, []);

  /**
   * 选中项发生变化时的回调
   * */
  const onSelectChange = useCallback((selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys, selectedRows);
  }, []);

  /**
   * 页数｜页码发生改变了
   * */
  const onPageChange = useCallback((page: number, pageSize: number) => {
    console.log(page, pageSize);
  }, []);

  const columns: ProColumns<API.TableListItem>[] = [
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
      sorter: true,
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
            <Button
              size={'small'}
              type={'primary'}
              onClick={doEdit.bind(this, record)}
              icon={<EditOutlined />}
            >
              编辑
            </Button>
            <Button
              type={'primary'}
              danger
              ghost
              size={'small'}
              icon={<DeleteOutlined />}
            >
              删除
            </Button>
          </Space>
        );
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.TableListItem>
        columns={columns}
        request={async (params, sort, filter) => {
          console.log(sort);
          const { data } = await fetchTableList({
            ...params,
            ...filter,
            sort,
          });
          return {
            data: data?.list,
            success: true,
            total: data?.total,
          };
        }}
        rowKey={'id'}
        bordered
        cardBordered
        headerTitle={'高级表格'}
        rowSelection={{
          // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
          // 注释该行则默认不显示下拉选项
          // selections: [],
          defaultSelectedRowKeys: [],
          onChange: onSelectChange,
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
    </PageContainer>
  );
};

export default ITable;
