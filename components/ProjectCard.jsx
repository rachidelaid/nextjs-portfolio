import React from 'react';
import Link from 'next/link';
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

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}}`}>
      <motion.div
        className={styles.card}
        variants={cardMotion}
        whileHover="hover"
        initial="initial"
        animate="animate"
        exit="initial"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <motion.div variants={contentMotion} className={styles.content}>
          <h3>{project.title}</h3>
          {project.description.lenght <= 50 ? (
            <p>{project.description}</p>
          ) : (
            <p>{project.description.substring(0, 50)} ...</p>
          )}
          <div className={styles.btn}>
            <span>read more</span>
            <FaAngleRight />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
