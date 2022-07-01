import React from 'react';
import styles from '../styles/SideBar.module.css';
import { FaEllipsisV } from 'react-icons/fa';

import Avatar from './Avatar';
import SideDetails from './SideDetails';
import SideFooter from './SideFooter';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.icon}>
        <FaEllipsisV />
      </div>
      <Avatar />
      <SideDetails />
      <SideFooter />
    </div>
  );
};

export default SideBar;
