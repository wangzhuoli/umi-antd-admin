import React from 'react';
import styles from './UserLayout.less';
import classnames from 'classnames';
import Footer from '@/layouts/Footer';
import { ReactComponent as Logo } from '@/assets/logo.svg';

const UserLayout: React.FC = (props) => {
  return (
    <section className={classnames(styles.layoutContainer, 'flexCenter')}>
      <main className={styles.main}>
        <header className={styles.header}>
          <Logo className={styles.logo} />
          <div className={styles.title}>Ant Design</div>
        </header>
        <div className={styles.desc}>
          Ant Design 是西湖区最具影响力的 Web 设计规范
        </div>
        {props.children}
      </main>
      <Footer />
    </section>
  );
};

export default UserLayout;
