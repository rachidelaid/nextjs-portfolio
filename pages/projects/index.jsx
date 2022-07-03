import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/projects.module.css';

import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

import projectList from '../../utils/projects';

const noProjectsMotions = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

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
      <div className={styles.categories}>
        {categories.map((cate) => (
          <p
            key={cate.id}
            className={`${cate.id === category ? styles.active : ''}`}
            onClick={() => setCategory(cate.id)}
          >
            {cate.name}
          </p>
        ))}
      </div>
      {!projectList.length && (
        <motion.div
          variants={noProjectsMotions}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={styles.no_projects}
        >
          <p>No projects yet</p>
        </motion.div>
      )}
      <div className={styles.projects}>
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
