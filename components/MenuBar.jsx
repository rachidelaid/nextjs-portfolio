import React, { useState } from 'react';
import styles from '../styles/MenuBar.module.css';

import MenuLinks from './MenuLinks';

const MenuBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.menu_bar}>
      <div className={styles.burger_menu} onClick={() => setOpen(!open)}>
        <div className={`${styles.burger} ${open ? styles.active : ''}`}>
          <span></span>
          <span></span>
        </div>
      </div>

      <MenuLinks />

      <div className={styles.languages}>
        <p>AR</p>
        <p>FR</p>
        <p className={styles.active}>EN</p>
      </div>
    </div>
  );
};

export default MenuBar;
