import React, { useState, useEffect } from 'react';
import styles from '../styles/Notification.module.css';
import { motion, AnimatePresence } from 'framer-motion';
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

const Notification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={notificationMotion}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={styles.notification}
        >
          <FaTimes
            className={styles.close}
            onClick={() => setIsVisible(false)}
          />
          <p>{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
