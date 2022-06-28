import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserAlt, FaAt, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/contact.module.css';

import Footer from '../components/Footer';

const cardMotions = {
  hidden: {
    scale: 0.9,
  },
  visible: {
    scale: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const labelMotions = {
  hidden: {
    x: -30,
  },
  visible: {
    x: 0,
  },
};

const contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h3>Get in touch</h3>
      <AnimatePresence>
        <motion.form
          onSubmit={handleSubmit}
          className={styles.card}
          variants={cardMotions}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.label variants={labelMotions} key="label1" htmlFor="name">
            <FaUserAlt />
            <input type="text" name="name" id="name" placeholder="name" />
          </motion.label>
          <motion.label variants={labelMotions} key="label2" htmlFor="email">
            <FaAt />
            <input type="email" name="email" id="email" placeholder="Email" />
          </motion.label>
          <motion.label variants={labelMotions} key="label3" htmlFor="message">
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
            variants={labelMotions}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            key="button"
            className={styles.btn}
          >
            Send Message
          </motion.button>
        </motion.form>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default contact;
