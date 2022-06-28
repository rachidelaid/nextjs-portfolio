import React, { useState } from 'react';
import styles from '../../styles/projects.module.css';

import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

const projects = () => {
  const [category, setCategory] = useState(0);

  const categories = [
    {
      name: 'All',
      id: 0,
    },
    {
      name: 'Web',
      id: 1,
    },
    {
      name: 'Mobile',
      id: 2,
    },
    {
      name: 'Other',
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
      <div className={styles.projects}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Footer />
    </div>
  );
};

export default projects;
