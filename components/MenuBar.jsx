import React, { useState } from 'react';
import styles from '../styles/MenuBar.module.css';

import MenuLinks from './MenuLinks';

const MenuBar = ({ openMenu }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    openMenu();
    setOpen(!open);
  };

  return (
    <div className={`${styles.menu_bar} ${open ? styles.expand : ''}`}>
      <div className={styles.burger_menu} onClick={toggleMenu}>
        <div className={`${styles.burger} ${open ? styles.active : ''}`}>
          <span></span>
          <span></span>
        </div>
      </div>

      <MenuLinks open={open} />

      <div className={styles.languages}>
        <p>AR</p>
        <p>FR</p>
        <p className={styles.active}>EN</p>
      </div>
    </div>
  );
};

export default MenuBar;
