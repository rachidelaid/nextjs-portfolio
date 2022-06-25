import React from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt, FaAt, FaEnvelope } from 'react-icons/fa';
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
      <h2>Get in touch</h2>
      <motion.form
        onSubmit={handleSubmit}
        className={styles.card}
        variants={cardMotions}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.label htmlFor="name">
          <FaUserAlt />
          <input type="text" name="name" id="name" placeholder="name" />
        </motion.label>
        <motion.label htmlFor="email">
          <FaAt />
          <input type="email" name="email" id="email" placeholder="Email" />
        </motion.label>
        <motion.label htmlFor="message">
          <FaEnvelope />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
        </motion.label>
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
