import styles from './index.less';
import { PageContainer } from '@ant-design/pro-layout';

export default function IndexPage() {
  return (
    <PageContainer>
      <h1 className={styles.title}>home</h1>
    </PageContainer>
  );
}
