import React, { useState } from 'react';
import styles from '../styles/MenuBar.module.css';

import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md';

import MenuLinks from './MenuLinks';

const MenuBar = ({ openMenu }) => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

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

      <MenuLinks open={open} toggleMenu={toggleMenu} />

      <div className={styles.footer}>
        <div
          className={`${dark ? styles.active : ''}`}
          onClick={() => setDark(!dark)}
        >
          {dark ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
