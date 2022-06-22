import React from 'react';
import styles from '../styles/SideBar.module.css';

import Avatar from './Avatar';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Avatar />
    </div>
  );
};

export default SideBar;
