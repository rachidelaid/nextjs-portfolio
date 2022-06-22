import React from 'react';
import Image from 'next/image';
import styles from '../styles/Avatar.module.css';

const Avatar = () => {
  return (
    <div className={styles.avatar_wrap}>
      <div className={styles.avatar}>
        <Image
          className={styles.avatar_image}
          src="/avatar.jpeg"
          alt="profile picture"
          width={90}
          height={90}
        />

        <div className={styles.status}>
          <div className={styles.circle}></div>
          <small className={styles.tooltip}>available for hire</small>
        </div>
      </div>
      <h5>RACHID EL AID</h5>
      <small>Full-stack Developer</small>
    </div>
  );
};

export default Avatar;
