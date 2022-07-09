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

  const vars = [
    '--dark1',
    '--dark2',
    '--dark3',
    '--dark4',
    '--dark5',
    '--accent-color',
    '--white-color',
    '--gray-color',
    '--lightgray-color',
  ];
  const darkVlaues = [
    '#191923',
    '#1e1e28',
    '#20202a',
    '#23232f',
    '#2d2d39',
    '#ffc107',
    '#fafafc',
    '#8c8c8e',
    '#8c8c8e3b',
  ];
  const lightValues = [
    '#ffffff',
    '#eaeaea',
    '#e0e0e0',
    '#d1d1d1',
    '#bababa',
    '#ce0c2f',
    '#070707',
    '#161616',
    '#fff',
  ];

  const toggleDark = () => {
    setDark(!dark);
    vars.forEach((variable, index) => {
      document.documentElement.style.setProperty(
        variable,
        dark ? darkVlaues[index] : lightValues[index],
      );
    });
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
        <div className={`${dark ? styles.active : ''}`} onClick={toggleDark}>
          {dark ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
