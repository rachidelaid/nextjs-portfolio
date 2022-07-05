import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Footer.module.css';

const footerMotions = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const Footer = ({ position = 'fixed' }) => {
  const [className, setClassName] = useState(styles.footer);
  const footerElement = useRef();

  useEffect(() => {
    const footer = footerElement.current;
    const footerHeight = footer.offsetHeight;
    const footerTop = footer.offsetTop;
    const footerBottom = footerTop + footerHeight;
    const windowHeight = window.innerHeight;
    const windowBottom = window.pageYOffset + windowHeight;

    if (footerBottom < windowBottom) {
      setClassName(
        `${styles.footer} ${
          position === 'fixed' ? styles.footer_fixed : styles.footer_absolute
        }`,
      );
    } else {
      setClassName(styles.footer);
    }
  }, []);

  return (
    <motion.div
      ref={footerElement}
      variants={footerMotions}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      <p>© {new Date().getFullYear()} rachid el aid</p>
    </motion.div>
  );
};

export default Footer;
