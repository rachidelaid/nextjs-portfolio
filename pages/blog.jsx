import React from 'react';
import styles from '../styles/blog.module.css';

import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

import blogs from '../utils/blogs';

const blog = () => {
  return (
    <div className={styles.container}>
      <h4>Blogs</h4>

      <div className={styles.blogs}>
        {blogs.map((blog) => (
          <ProjectCard key={blog.id} project={blog} blog={true} />
        ))}
      </div>
      <Footer position="relative" />
    </div>
  );
};

export default blog;
