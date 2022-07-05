import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import {
  DiBootstrap,
  DiCss3Full,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiLinux,
  DiMongodb,
  DiNodejsSmall,
  DiPostgresql,
  DiPython,
  DiRuby,
  DiRor,
  DiReact,
  DiSass,
  DiHeroku,
  DiIonic,
  DiNpm,
} from 'react-icons/di';
import {
  SiD3Dotjs,
  SiElectron,
  SiFigma,
  SiJest,
  SiNetlify,
  SiPostman,
  SiRedux,
  SiTypescript,
  SiVisualstudiocode,
  SiSvelte,
  SiNextdotjs,
  SiNuxtdotjs,
  SiFirebase,
} from 'react-icons/si';
import 'swiper/css';
import styles from '../styles/Frameworks.module.css';

import { fadeInRight } from '../utils/motions';

const Frameworks = () => {
  const icons = [
    {
      title: 'Bootstrap',
      element: <DiBootstrap key="icon1" />,
    },
    {
      title: 'CSS3',
      element: <DiCss3Full key="icon2" />,
    },
    {
      title: 'Firebase',
      element: <SiFirebase key="icon3" />,
    },
    {
      title: 'Git',
      element: <DiGit key="icon4" />,
    },
    {
      title: 'HTML5',
      element: <DiHtml5 key="icon5" />,
    },
    {
      title: 'Javascript',
      element: <DiJsBadge key="icon6" />,
    },
    {
      title: 'Linux',
      element: <DiLinux key="icon7" />,
    },
    {
      title: 'MongoDB',
      element: <DiMongodb key="icon8" />,
    },
    {
      title: 'NodeJS',
      element: <DiNodejsSmall key="icon9" />,
    },
    {
      title: 'PostgreSQL',
      element: <DiPostgresql key="icon10" />,
    },
    {
      title: 'Python',
      element: <DiPython key="icon11" />,
    },
    {
      title: 'Ruby',
      element: <DiRuby key="icon12" />,
    },
    {
      title: 'Ruby on Rails',
      element: <DiRor key="icon13" />,
    },
    {
      title: 'ReactJS',
      element: <DiReact key="icon14" />,
    },
    {
      title: 'Sass',
      element: <DiSass key="icon15" />,
    },
    {
      title: 'Heroku',
      element: <DiHeroku key="icon16" />,
    },
    {
      title: 'Ionic',
      element: <DiIonic key="icon17" />,
    },
    {
      title: 'D3.js',
      element: <SiD3Dotjs key="icon18" />,
    },
    {
      title: 'ElectronJS',
      element: <SiElectron key="icon19" />,
    },
    {
      title: 'Figma',
      element: <SiFigma key="icon20" />,
    },
    {
      title: 'Jest',
      element: <SiJest key="icon21" />,
    },
    {
      title: 'Netlify',
      element: <SiNetlify key="icon22" />,
    },
    {
      title: 'Postman',
      element: <SiPostman key="icon23" />,
    },
    {
      title: 'Redux',
      element: <SiRedux key="icon14" />,
    },
    {
      title: 'TypeScript',
      element: <SiTypescript key="icon25" />,
    },
    {
      title: 'VS Code',
      element: <SiVisualstudiocode key="icon26" />,
    },
    {
      title: 'Npm',
      element: <DiNpm key="icon27" />,
    },
    {
      title: 'Svelte',
      element: <SiSvelte key="icon28" />,
    },
    {
      title: 'Next.js',
      element: <SiNextdotjs key="icon29" />,
    },
    {
      title: 'Nuxt.js',
      element: <SiNuxtdotjs key="icon30" />,
    },
  ];

  const breakpoints = {
    200: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 8,
    },
  };

  return (
    <motion.div
      variants={fadeInRight}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.swiper}
    >
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        loop={true}
        breakpoints={breakpoints}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {icons.map((icon, index) => (
          <SwiperSlide key={`icon-${index + 1}`} className={styles.slide}>
            <small className={styles.title}>{icon.title}</small>
            {icon.element}
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Frameworks;
