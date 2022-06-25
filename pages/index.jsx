import styles from '../styles/Home.module.css';

import TopCard from '../components/TopCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.top_wrap}></div>
      <TopCard />
    </div>
  );
}
