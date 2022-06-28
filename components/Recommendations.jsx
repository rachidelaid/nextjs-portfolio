import React from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
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
      name: 'Abdulfatai Badara',
      image:
        'https://media-exp1.licdn.com/dms/image/D5635AQHbgjjSic2Dpw/profile-framedphoto-shrink_100_100/0/1641307778403?e=1657022400&v=beta&t=dOe21zLOrq52ftZtEyqNpYjMAKfH9jCqc4kahW34-ps',
      title:
        'Full-Stack Web Developer. JavaScript, Rails, React, Redux. Improving open-source projects, one commit at a time',
      description: `Rachid is a fantastic software engineer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled at a software development program, and in that time his work ethic blew me away. Moses views writing clean, accessible code as a calling, and he's great at identifying areas where we can improve UI. He's also super friendly; by the time our project was done, I felt like we'd known each other for years. I can't recommend him enough!`,
    },
    {
      name: 'Jos Kalenda',
      image:
        'https://media-exp1.licdn.com/dms/image/C4D03AQFYCEt8_7PLZA/profile-displayphoto-shrink_100_100/0/1642715749236?e=1661990400&v=beta&t=vsn4Iq5WD_Pi-13xmWnzElE1TICvpWI0inZ_P_9BtpM',
      title:
        'Full-stack developer with a passion for writing clean, DRY codes and building mobile-responsive Applications using : JavaScript | React | Ruby | Rails',
      description: `It is always a pleasure working with Rachid, if you get a chance to work with him, you will notice how much he is a good collaborator, committed, and a deadline-oriented person, Rachid always focus on the best and optimal approach to a solution, he is always ready to help a teammate with a coder's block, I can't recommend him enough.`,
    },
    {
      name: 'Pedro Guerreiro',
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQENQAcnn1NuXg/profile-displayphoto-shrink_100_100/0/1645732120285?e=1661990400&v=beta&t=bLtJx5mYo482KI9b9Ki1Pw5Zqo9cnfdEd97USSCI8Ko',
      title:
        'Full-Stack Web Developer | JavaScript, React, Redux, Ruby, Rails, PostgreSQL | Currently looking for opportunities.Full-Stack Web Developer | JavaScript, React, Redux, Ruby, Rails, PostgreSQL | Currently looking for opportunities.',
      description: `I worked with Rachid El Aid as students at Microverse. Rachid was smart and knew more than the others. With that information, he reached and gave insight to many. His mindset is that by teaching you also learn. I found him to be a pillar to motivating myself and I'm glad I spent one month working with him.`,
    },
    {
      name: 'Mithlesh kumar',
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQE7baHB89RI6A/profile-displayphoto-shrink_100_100/0/1644038619161?e=1661990400&v=beta&t=qNZVtxRdDpWz8wTh8SoGjMYoarVJWhQew2Pn2E4gsBo',
      title: 'Full-Stack Developer',
      description: `Rachid is a fantastic person to work with. He is very thorough in everything he does and can be depended upon to get the job done. Rachid is dedicated, self-motivated, methodical, and very capable. Whenever I had a problem, there has never been a time he has left me without a solution. Besides being a joy to work with, Rachid is a take-charge person who is able to present a creative solution to complex problems and communicate the benefits to the company. Rachid is one of the best among all people I have ever met. Working with Rachid I found him as a person with great recognition and deep experience in website development. An ambitious employee with boundless energy.`,
    },
    {
      name: 'Mike Kanu',
      image:
        'https://media-exp1.licdn.com/dms/image/C5603AQHUASERmYe-WA/profile-displayphoto-shrink_100_100/0/1645558822023?e=1661990400&v=beta&t=spJsLnK25yLoqJ0EubnlR2y4WJdgAAx48b8bmDL6azQ',
      title:
        'Remote Full Stack Web Developer. JavaScript | React | Redux | Ruby | Ruby on Rails | Bootstrap | Sass | HTML5 | CSS3',
      description: `Rachid Elaid is someone I have taken as my mentor because he is someone I look up to and I wish I can code like him someday. He has a nice personality, communicates well, is a team player, and never relents in helping a team member.`,
    },
  ];

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
    <div className={styles.recommendations}>
      <h3>Recommendations From Linkedin</h3>
      <Swiper
        className={styles.slider}
        slidesPerView={1}
        spaceBetween={30}
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
        {recommendations.map((card, index) => (
          <SwiperSlide key={`card-${index}`} className={styles.slide}>
            <RecommendationCard key={`card-${index}`} card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.footer}>
        <div className={styles.pagination} id="pagination"></div>
        <div className={styles.navigation}>
          <FiChevronLeft id="prev" />
          <FiChevronRight id="next" />
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
