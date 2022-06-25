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
  return (
    <div className={styles.swiper}>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <DiBootstrap />
        </SwiperSlide>

        <SwiperSlide>
          <DiCss3Full />
        </SwiperSlide>

        <SwiperSlide>
          <DiCss3 />
        </SwiperSlide>

        <SwiperSlide>
          <DiGit />
        </SwiperSlide>

        <SwiperSlide>
          <DiHtml5 />
        </SwiperSlide>

        <SwiperSlide>
          <DiJsBadge />
        </SwiperSlide>

        <SwiperSlide>
          <DiLinux />
        </SwiperSlide>

        <SwiperSlide>
          <DiMongodb />
        </SwiperSlide>

        <SwiperSlide>
          <DiNodejsSmall />
        </SwiperSlide>

        <SwiperSlide>
          <DiPostgresql />
        </SwiperSlide>

        <SwiperSlide>
          <DiPython />
        </SwiperSlide>

        <SwiperSlide>
          <DiRuby />
        </SwiperSlide>

        <SwiperSlide>
          <DiRor />
        </SwiperSlide>

        <SwiperSlide>
          <DiReact />
        </SwiperSlide>

        <SwiperSlide>
          <DiSass />
        </SwiperSlide>

        <SwiperSlide>
          <DiHeroku />
        </SwiperSlide>

        <SwiperSlide>
          <DiIonic />
        </SwiperSlide>

        <SwiperSlide>
          <SiD3Dotjs />
        </SwiperSlide>

        <SwiperSlide>
          <SiElectron />
        </SwiperSlide>

        <SwiperSlide>
          <SiFigma />
        </SwiperSlide>

        <SwiperSlide>
          <SiJest />
        </SwiperSlide>

        <SwiperSlide>
          <SiNetlify />
        </SwiperSlide>

        <SwiperSlide>
          <SiPostman />
        </SwiperSlide>

        <SwiperSlide>
          <SiRedux />
        </SwiperSlide>

        <SwiperSlide>
          <SiTypescript />
        </SwiperSlide>

        <SwiperSlide>
          <SiVisualstudiocode />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Frameworks;
