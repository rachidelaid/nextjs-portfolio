import React, { useState, useEffect } from 'react';
import styles from '../styles/Notification.module.css';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const notificationMotion = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Notification = ({ message, type, duration = 3 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, duration * 1000);

    return () => clearTimeout(timeout);
  }, []);

  const getClassName = () => {
    let className = '';

    if (type === 'error') className = styles.error;
    if (type === 'success') className = styles.success;
    if (type === 'warning') className = styles.warning;

    return `${styles.notification} ${className}`;
  };

  return (
    <>
      {isVisible && (
        <motion.div
          variants={notificationMotion}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={getClassName()}
        >
          <div
            className={styles.top_border}
            style={{ animationDuration: `${duration}s` }}
          ></div>
          <FaTimes
            className={styles.close}
            onClick={() => setIsVisible(false)}
          />
          <p>{message}</p>
        </motion.div>
      )}
    </>
  );
};

export default Notification;
