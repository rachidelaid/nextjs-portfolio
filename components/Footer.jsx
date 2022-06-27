import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Footer.module.css';

const footerMotions = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const Footer = () => {
  return (
    <motion.div
      variants={footerMotions}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={styles.footer}
    >
      <p>© {new Date().getFullYear()} rachid el aid</p>
    </motion.div>
  );
};

export default Footer;
