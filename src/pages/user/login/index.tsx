import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Tabs, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MobileOutlined } from '@ant-design/icons';
import styles from './index.less';
import { fetchUserInfo, login } from '@/services/user';
import { useRequest, history, useModel } from 'umi';

const { TabPane } = Tabs;

type TableKey = 'account' | 'mobile' | string;

const Login = () => {
  /**
   *  登录方式
   * */
  const [activeKey, setActiveKey] = useState<TableKey>('account');
  /**
   * 登录请求
   * */
  const { data, loading, run } = useRequest<{ data: API.LoginResult }>(login, {
    manual: true,
  });
  /**
   * initialState
   * */
  const { refresh } = useModel('@@initialState');
  /**
   * 监听登录数据
   * */
  // @ts-ignore
  useEffect(async () => {
    if (data) {
      // 登录成功-跳转到首页
      localStorage.setItem('token', data.token);
      await refresh();
      history.push('/');
    }
  }, [data]);

  const onFinish = useCallback((values) => {
    run(values);
  }, []);

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
            placeholder="用户名：随意填写"
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
            placeholder="密码： 随意填写"
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
            placeholder="手机号：随意填写"
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
              placeholder="验证码：随意填写"
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
          loading={loading}
          size="large"
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
