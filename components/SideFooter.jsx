import React from 'react';
import { FaAngellist, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import styles from '../styles/SideFooter.module.css';

const SideFooter = () => {
  return (
    <div className={styles.footer}>
      <a href="#">
        <FaGithub />
      </a>

      <a href="#">
        <FaLinkedinIn />
      </a>

      <a href="#">
        <FaTwitter />
      </a>

      <a href="#">
        <FaAngellist />
      </a>
    </div>
  );
};

export default SideFooter;
