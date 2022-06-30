import styles from '../styles/home.module.css';

import TopCard from '../components/TopCard';
import Frameworks from '../components/Frameworks';
import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <TopCard />
      <Frameworks />
      <Recommendations />
      <Footer />
    </div>
  );
}
