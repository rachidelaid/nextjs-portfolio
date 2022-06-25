import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import {
  DiBootstrap,
  DiCss3Full,
  DiCss3,
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
} from 'react-icons/si';
import 'swiper/css';
import styles from '../styles/Frameworks.module.css';

const Frameworks = () => {
  const icons = [
    <DiBootstrap key="icon1" />,
    <DiCss3Full key="icon2" />,
    <DiCss3 key="icon3" />,
    <DiGit key="icon4" />,
    <DiHtml5 key="icon5" />,
    <DiJsBadge key="icon6" />,
    <DiLinux key="icon7" />,
    <DiMongodb key="icon8" />,
    <DiNodejsSmall key="icon9" />,
    <DiPostgresql key="icon10" />,
    <DiPython key="icon11" />,
    <DiRuby key="icon12" />,
    <DiRor key="icon13" />,
    <DiReact key="icon14" />,
    <DiSass key="icon15" />,
    <DiHeroku key="icon16" />,
    <DiIonic key="icon17" />,
    <SiD3Dotjs key="icon18" />,
    <SiElectron key="icon19" />,
    <SiFigma key="icon20" />,
    <SiJest key="icon21" />,
    <SiNetlify key="icon22" />,
    <SiPostman key="icon23" />,
    <SiRedux key="icon14" />,
    <SiTypescript key="icon25" />,
    <SiVisualstudiocode key="icon26" />,
  ];

  return (
    <div className={styles.swiper}>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {icons.map((icon, index) => (
          <SwiperSlide key={`icon-${index + 1}`}>{icon}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Frameworks;
