import React, { useState, useMemo, useCallback } from 'react';
import { Tabs, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MobileOutlined } from '@ant-design/icons';
import styles from './index.less';

const { TabPane } = Tabs;

type TableKey = 'account' | 'mobile' | string;

const Login = () => {
  const [activeKey, setActiveKey] = useState<TableKey>('account');

  const onFinish = () => {
    console.log('0000');
  };
  console.log('0000');

  const getCode = useCallback(() => {
    //
  }, []);

  const accountFormItems = useMemo(() => {
    return (
      <>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '用户名是必填项！' }]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名：admin"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '密码是必填项！' }]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码： 123456"
          />
        </Form.Item>
      </>
    );
  }, []);

  const mobileFormItems = useMemo(() => {
    return (
      <>
        <Form.Item
          name="mobile"
          rules={[{ required: true, message: '手机号是必填项！' }]}
        >
          <Input
            size="large"
            prefix={<MobileOutlined className="site-form-item-icon" />}
            placeholder="手机号：12345678910"
          />
        </Form.Item>
        <Form.Item className={styles.codeFormItem}>
          <Form.Item
            name="code"
            rules={[{ required: true, message: '验证码是必填项!' }]}
            noStyle
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="验证码：1234"
            />
          </Form.Item>
          <Button
            size="large"
            onClick={getCode}
            className={styles.getCodeButton}
          >
            获取验证码
          </Button>
        </Form.Item>
      </>
    );
  }, []);

  return (
    <Form onFinish={onFinish} name="login_form" className={styles.loginForm}>
      <Tabs defaultActiveKey={activeKey} centered onTabClick={setActiveKey}>
        <TabPane tab="账号登录" key="account" />
        <TabPane tab="手机号登录" key="mobile" />
      </Tabs>
      {activeKey === 'account' ? accountFormItems : mobileFormItems}
      <Form.Item className={styles.rememberFormItem}>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>自动登录</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
          忘记密码？
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block
          size="large"
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
