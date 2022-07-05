import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa';
import styles from '../styles/ProjectCard.module.css';

import { scaleIn } from '../utils/motions';

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

const ProjectCard = ({ project, blog }) => {
  const card = () => (
    <motion.div
      className={styles.card}
      variants={scaleIn}
      whileHover="hover"
      initial="initial"
      animate="animate"
      exit="initial"
      style={{
        backgroundImage: `url(${project.image})`,
      }}
      key={project.id}
    >
      <motion.div variants={contentMotion} className={styles.content}>
        <h3>{project.title}</h3>
        {project.description.lenght <= 50 || blog ? (
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
  );

  return (
    <>
      {blog ? (
        <a href={project.link} target="_blank" rel="noreferrer">
          {card()}
        </a>
      ) : (
        <Link href={`/projects/${project.id}`}>{card()}</Link>
      )}
    </>
  );
};

export default ProjectCard;
