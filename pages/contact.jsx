import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

const Contact = () => {
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch('/api/sheet', {
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

    if (resp.ok) {
      setNotification({
        message: 'Thank you for your message, expect to hear from me soon.',
        type: 'success',
      });
      e.target.reset();
    } else {
      setNotification({
        message:
          'Something wrong happened, please try another communication method.',
        type: 'error',
      });
    }
  };

  return (
    <div className={styles.container}>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
      <h3>Get in touch</h3>
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
      <Footer position="absolute" />
    </div>
  );
};

export default Contact;
