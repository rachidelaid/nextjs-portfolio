import React from 'react';
import styles from '../styles/blog.module.css';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

import blogs from '../utils/blogs';

import { stagger, fadeInDown } from '../utils/motions';

const blog = () => {
  return (
    <div className={styles.container}>
      <motion.h4
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Blogs
      </motion.h4>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.blogs}
      >
        {blogs.map((blog) => (
          <motion.div variants={fadeInDown} key={blog.id}>
            <ProjectCard project={blog} blog={true} />
          </motion.div>
        ))}
      </motion.div>
      <Footer position="absolute" />
    </div>
  );
};

export default blog;
