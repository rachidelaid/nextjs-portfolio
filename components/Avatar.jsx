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
          <div className={styles.tooltip}></div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
