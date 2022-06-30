import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/404.module.css';

const Error = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/" className={styles.btn}>
        <motion.button
          className={styles.btn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Go to home page
        </motion.button>
      </Link>
    </div>
  );
};

export default Error;
