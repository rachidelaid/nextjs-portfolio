import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>© {new Date().getFullYear()} rachid el aid</p>
    </div>
  );
};

export default Footer;
