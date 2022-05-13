import React, { useState } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

type TableKey = 'account' | 'mobile' | string;

const Login = () => {
  const [activeKey, setActiveKey] = useState<TableKey>('account');

  return (
    <Tabs defaultActiveKey={activeKey} centered onTabClick={setActiveKey}>
      <TabPane tab="账号登录" key="account">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="手机号登录" key="mobile">
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  );
};

export default Login;
