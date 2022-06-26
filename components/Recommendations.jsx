import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Recommendations.module.css';

const RecommendationCard = ({ card }) => {
  return (
    <div className={styles.recommendation_card}>
      <h5>{card.name}</h5>
      <small>{card.title}</small>
      <div className={styles.image_wrap}>
        <Image
          className={styles.profile_image}
          src={card.image}
          alt="profile picture"
          width={70}
          height={70}
        />
      </div>
      <p>{card.description}</p>
    </div>
  );
};

const Recommendations = () => {
  const recommendations = [
    {
      name: 'REHMANMUNEEB UL REHMAN',
      image:
        'https://media-exp1.licdn.com/dms/image/C4D03AQE9L0-6W4MbUA/profile-displayphoto-shrink_100_100/0/1649156874342?e=1661990400&v=beta&t=91wzFF8oE_DF49JhFkth55W9wWEGYELtFhFywqxYIYo',
      title: 'Software Engineer. Full-Stack developer (MERN / Rails)',
      description:
        'Rachid is one of those guys who is driven by passion and curiosity. His passion for writing clean and optimized code was clearly visible to me while we were working together. He has a good work ethic and professional behavior. He is always there whenever you need any kind of help. Also, he has a great aptitude for solving difficult problems. All in all, Rachid is a great guy. Recommended if you need to build a web or mobile app from the ground up.',
    },
    {
      name: 'REHMANMUNEEB UL REHMAN',
      image:
        'https://media-exp1.licdn.com/dms/image/C4D03AQE9L0-6W4MbUA/profile-displayphoto-shrink_100_100/0/1649156874342?e=1661990400&v=beta&t=91wzFF8oE_DF49JhFkth55W9wWEGYELtFhFywqxYIYo',
      title: 'Software Engineer. Full-Stack developer (MERN / Rails)',
      description:
        'Rachid is one of those guys who is driven by passion and curiosity. His passion for writing clean and optimized code was clearly visible to me while we were working together. He has a good work ethic and professional behavior. He is always there whenever you need any kind of help. Also, he has a great aptitude for solving difficult problems. All in all, Rachid is a great guy. Recommended if you need to build a web or mobile app from the ground up.',
    },
    {
      name: 'REHMANMUNEEB UL REHMAN',
      image:
        'https://media-exp1.licdn.com/dms/image/C4D03AQE9L0-6W4MbUA/profile-displayphoto-shrink_100_100/0/1649156874342?e=1661990400&v=beta&t=91wzFF8oE_DF49JhFkth55W9wWEGYELtFhFywqxYIYo',
      title: 'Software Engineer. Full-Stack developer (MERN / Rails)',
      description:
        'Rachid is one of those guys who is driven by passion and curiosity. His passion for writing clean and optimized code was clearly visible to me while we were working together. He has a good work ethic and professional behavior. He is always there whenever you need any kind of help. Also, he has a great aptitude for solving difficult problems. All in all, Rachid is a great guy. Recommended if you need to build a web or mobile app from the ground up.',
    },
  ];

  return (
    <div className={styles.recommendations}>
      <h3>Recommendations</h3>
      <Swiper
        className={styles.slider}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {recommendations.map((card, index) => (
          <SwiperSlide key={`card-${index}`} className={styles.slide}>
            <RecommendationCard key={`card-${index}`} card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommendations;
