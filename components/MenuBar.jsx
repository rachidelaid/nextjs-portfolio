import React, { useState } from 'react';
import styles from '../styles/MenuBar.module.css';

const MenuBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.menu_bar}>
      <div className={styles.burger_menu} onClick={() => setOpen(!open)}>
        <span className={open ? styles.active : ''}></span>
        <span className={open ? styles.active : ''}></span>
        <span className={open ? styles.active : ''}></span>
      </div>

      <div className={styles.languages}>
        <p>AR</p>
        <p>FR</p>
        <p className={styles.active}>EN</p>
      </div>
    </div>
  );
};

export default MenuBar;
