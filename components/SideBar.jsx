import React from 'react';
import styles from '../styles/SideBar.module.css';

import Avatar from './Avatar';
import SideDetails from './SideDetails';
import SideFooter from './SideFooter';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Avatar />
      <SideDetails />
      <SideFooter />
    </div>
  );
};

export default SideBar;
