import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SwiperSlide } from 'swiper/react';
import { FaAngleRight, FaAngleLeft, FaGithub, FaEye } from 'react-icons/fa';
import styles from '../../styles/Project.module.css';

import Footer from '../../components/Footer';
import SwiperWrap from '../../components/SwiperWrap';
import TopCard from '../../components/TopCard';

import projects from '../../utils/projects';

import { fadeInDown, stagger, fadeInRight } from '../../utils/motions';

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
    <motion.div
      className={styles.container}
      variants={stagger}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className={styles.head} variants={fadeInDown}>
        <h4>{project.title}</h4>
        <div className={styles.category}>{project.langs.join(', ')}</div>
      </motion.div>

      <motion.div className={styles.head} variants={fadeInRight}>
        <SwiperWrap centered={true}>
          {[project.image].map((image, index) => (
            <SwiperSlide key={`card-${index}`}>
              <Image
                src={image}
                width={400}
                height={300}
                alt="project screenshot"
              />
            </SwiperSlide>
          ))}
        </SwiperWrap>
      </motion.div>

      <div className={styles.details}>
        <motion.div variants={fadeInDown}>
          <h4>Description</h4>
          <p>{project.description}</p>
        </motion.div>

        <motion.div variants={fadeInDown}>
          <a href={project.gitLink} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <FaEye />
          </a>
        </motion.div>
      </div>

      <TopCard center={true} />
      <motion.div variants={fadeInDown} className={styles.card_footer}>
        {projects.find((p) => p.id === project.id - 1) ? (
          <Link href={`/projects/${project.id - 1}`}>
            <div className={`${styles.btn} ${styles.active}`}>
              <FaAngleLeft />
              Previous project
            </div>
          </Link>
        ) : (
          <Link href="#">
            <div className={styles.btn}>
              <FaAngleLeft />
              Previous project
            </div>
          </Link>
        )}
        <Link href="/projects">All projects</Link>
        {projects.find((p) => p.id === project.id + 1) ? (
          <Link href={`/projects/${project.id + 1}`}>
            <div className={`${styles.btn} ${styles.active}`}>
              Next project
              <FaAngleRight />
            </div>
          </Link>
        ) : (
          <Link href="#">
            <div className={styles.btn}>
              Next project
              <FaAngleRight />
            </div>
          </Link>
        )}
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default Project;
