import React from 'react';
import styles from '../styles/SideBar.module.css';

import Avatar from './Avatar';
import SideDetails from './SideDetails';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Avatar />
      <SideDetails />
    </div>
  );
};

export default SideBar;
