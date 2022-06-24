import React from 'react';
import styles from '../styles/MenuLinks.module.css';

const MenuLinks = ({ open }) => {
  return (
    <div className={styles.links}>
      <div className={`${styles.current} ${open ? styles.hide : ''}`}>Home</div>
    </div>
  );
};

export default MenuLinks;
