import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/projects.module.css';

import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

import projectList from '../../utils/projects';

import { fadeInDown, stagger } from '../../utils/motions';

const Projects = () => {
  const [category, setCategory] = useState(0);

  const categories = [
    {
      name: 'All',
      id: 0,
    },
    {
      name: 'Small',
      id: 1,
    },
    {
      name: 'Medium',
      id: 2,
    },
    {
      name: 'Large',
      id: 3,
    },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.categories}
      >
        {categories.map((cate) => (
          <p
            key={cate.id}
            className={`${cate.id === category ? styles.active : ''}`}
            onClick={() => setCategory(cate.id)}
          >
            {cate.name}
          </p>
        ))}
      </motion.div>
      {!projectList.length && (
        <motion.div
          variants={fadeInDown}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.no_projects}
        >
          <p>No projects yet</p>
        </motion.div>
      )}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.projects}
      >
        {projectList.map((project) => (
          <motion.div variants={fadeInDown} key={project.id}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Projects;
