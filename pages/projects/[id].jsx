import React from 'react';
import styles from '../../styles/Project.module.css';

import Footer from '../../components/Footer';

import projects from '../../utils/projects';

export const getStaticPaths = () => {
  return {
    paths: projects.map((project) => ({
      params: { id: project.id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const { id } = context.params;
  const project = projects.find((p) => p.id === +id);
  return {
    props: {
      project,
    },
  };
};

const Project = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h4>{project.title}</h4>
        <div className={styles.category}>{project.langs.join(', ')}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
