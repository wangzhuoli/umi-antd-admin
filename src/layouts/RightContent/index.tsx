import React from 'react';
import { Dropdown, Menu, Avatar, Spin } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useModel } from 'umi';
import styles from './index.less';

const RightContent = () => {
  const { initialState } = useModel('@@initialState');

  const loading = (
    <Spin
      size="small"
      style={{
        marginLeft: 8,
        marginRight: 8,
      }}
    />
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser) {
    return loading;
  }

  const OverlayContent = (
    <Menu
      items={[
        {
          key: 'center',
          label: (
            <>
              <UserOutlined />
              个人中心
            </>
          ),
        },
        {
          key: 'settings',
          label: (
            <>
              <SettingOutlined />
              个人设置
            </>
          ),
        },
        {
          type: 'divider',
        },
        {
          key: 'logout',
          label: (
            <>
              <LogoutOutlined />
              退出登录
            </>
          ),
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={OverlayContent}>
      <div>
        <Avatar icon={<UserOutlined />} src={currentUser.headUrl} />
        <span className={styles.username}>{currentUser.username}</span>
      </div>
    </Dropdown>
  );
};

export default RightContent;
