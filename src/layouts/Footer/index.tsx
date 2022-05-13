import React from 'react';
import styles from './index.less';
import { GithubOutlined, CopyrightOutlined } from '@ant-design/icons';

const RightContent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="https://preview.pro.ant.design/" target="_blank">
          Ant Design Pro
        </a>
        <a href="https://preview.pro.ant.design/" target="_blank">
          <GithubOutlined />
        </a>
        <a href="https://ant.design/" target="_blank">
          Ant Design
        </a>
      </div>
      <div className={styles.copyright}>
        <CopyrightOutlined />
        2022 蚂蚁集团体验技术部出品
      </div>
    </footer>
  );
};

export default RightContent;
