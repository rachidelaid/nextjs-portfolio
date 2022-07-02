import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/TopCard.module.css';

import TextRotate from './TextRotate';

const cardMotions = {
  hidden: {
    scale: 0.9,
  },
  visible: {
    scale: 1,
  },
};

const TopCard = ({ center }) => {
  return (
    <motion.div
      className={`${styles.top_card} ${center ? styles.center : ''}`}
      variants={cardMotions}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h1>RACHID EL AID</h1>
      <TextRotate />
      <Link href="/contact">
        <motion.button
          className={styles.btn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Me
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default TopCard;
