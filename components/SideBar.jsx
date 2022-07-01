import React, { useState } from 'react';
import styles from '../styles/SideBar.module.css';
import { FaEllipsisV } from 'react-icons/fa';

import Avatar from './Avatar';
import SideDetails from './SideDetails';
import SideFooter from './SideFooter';

const SideBar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className={`${styles.sidebar} ${expand ? styles.expand : ''}`}>
      <div className={styles.icon} onClick={() => setExpand(!expand)}>
        <FaEllipsisV />
      </div>
      <Avatar />
      <SideDetails />
      <SideFooter />
    </div>
  );
};

export default SideBar;
