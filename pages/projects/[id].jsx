import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import styles from '../../styles/Project.module.css';

import Footer from '../../components/Footer';
import SwiperWrap from '../../components/SwiperWrap';
import TopCard from '../../components/TopCard';

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
  const images = [
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h4>{project.title}</h4>
        <div className={styles.category}>{project.langs.join(', ')}</div>
      </div>

      <SwiperWrap>
        {images.map((image, index) => (
          <SwiperSlide key={`card-${index}`}>
            <Image
              src={image}
              width={200}
              height={160}
              alt="project screenshot"
            />
          </SwiperSlide>
        ))}
      </SwiperWrap>

      <div className={styles.details}>
        <h4>Description</h4>
        <p>{project.description}</p>
      </div>

      <TopCard />
      <div className={styles.card_footer}>
        <Link href="/projects/3">
          <div className={styles.btn}>
            <FaAngleLeft />
            Previous project
          </div>
        </Link>
        <Link href="/projects" className={styles.all_link}>
          All projects
        </Link>
        <Link href="/projects/1">
          <div className={styles.btn}>
            Next project
            <FaAngleRight />
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Project;
