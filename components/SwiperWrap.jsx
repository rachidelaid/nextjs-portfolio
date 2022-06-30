import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../styles/SwiperWrap.module.css';

const SwiperWrap = ({ children, centered }) => {
  const pagination = {
    clickable: true,
    el: '#pagination',
    renderBullet: (i, cn) =>
      `<span class="${cn}" aria-label="Go to slide ${i}"></span>`,
  };

  const navigation = {
    nextEl: '#next',
    prevEl: '#prev',
    disabledClass: 'disabled',
  };

  return (
    <>
      <Swiper
        className={`${styles.slider} recommendations_list`}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={centered}
        direction="horizontal"
        breakpoints={{
          // when window width is >= 1100px
          1150: {
            slidesPerView: 2,
          },
        }}
        pagination={pagination}
        navigation={navigation}
        modules={[Pagination, Navigation]}
      >
        {children}
      </Swiper>
      <div className={styles.footer}>
        <div className={styles.pagination} id="pagination"></div>
        <div className={styles.navigation}>
          <FiChevronLeft id="prev" />
          <FiChevronRight id="next" />
        </div>
      </div>
    </>
  );
};

export default SwiperWrap;
