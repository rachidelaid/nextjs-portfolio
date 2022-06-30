import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserAlt, FaAt, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/contact.module.css';

import Footer from '../components/Footer';
import Notification from '../components/Notification';

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

    fetch('/api/sheet', {
      method: 'POST',
      body: JSON.stringify({
        name: e.target.name.value.trim(),
        email: e.target.email.value.trim(),
        message: e.target.message.value.trim(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <Notification
        message="Thank you for your message, expect to hear from me soon."
        duration={7}
        type="error"
      />
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
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              required
            />
          </motion.label>
          <motion.label variants={labelMotions} key="label2" htmlFor="email">
            <FaAt />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </motion.label>
          <motion.label variants={labelMotions} key="label3" htmlFor="message">
            <FaEnvelope />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              required
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
