import styles from '../styles/home.module.css';

import TopCard from '../components/TopCard';
import Frameworks from '../components/Frameworks';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.top_wrap}></div>
      <TopCard />
      <Frameworks />
    </div>
  );
}
