import React from 'react';
import { motion } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa';
import styles from '../styles/ProjectCard.module.css';

const cardMotion = {
  initial: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const contentMotion = {
  initial: {
    opacity: 0,
    y: 130,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 110,
      damping: 20,
    },
  },
};

const ProjectCard = () => {
  return (
    <motion.div
      className={styles.card}
      variants={cardMotion}
      whileHover="hover"
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <motion.div variants={contentMotion} className={styles.content}>
        <h3>Project Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisl eu consectetur consectetur.
        </p>
        <div className={styles.btn}>
          <span>read more</span>
          <FaAngleRight />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
