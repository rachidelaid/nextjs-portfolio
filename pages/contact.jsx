import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/contact.module.css';

const cardMotions = {
  hidden: {
    scale: 0.9,
  },
  visible: {
    scale: 1,
  },
};

const contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <motion.form
        onSubmit={handleSubmit}
        className={styles.card}
        variants={cardMotions}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className={styles.btn}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default contact;
