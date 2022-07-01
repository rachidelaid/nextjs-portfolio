import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import styles from '../styles/SideDetails.module.css';

const SideDetails = () => {
  const age = () => {
    const dob = new Date('07/05/1997');
    const month_diff = Date.now() - dob.getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();
    return Math.abs(year - 1970);
  };

  return (
    <div className={styles.details}>
      <ul>
        <li>
          <h5>Residence:</h5>
          <span>Morocco</span>
        </li>
        <li>
          <h5>City:</h5>
          <span>Marrakech</span>
        </li>
        <li>
          <h5>Age:</h5>
          <span>{age()}</span>
        </li>
      </ul>

      <div className={styles.hobbies}>
        <ul>
          <li>
            <FaAngleDown /> <p>Playing Football</p>
          </li>
          <li>
            <FaAngleDown /> <p>Listening To Podcast</p>
          </li>
          <li>
            <FaAngleDown /> <p>Playing Video Games</p>
          </li>
        </ul>
      </div>

      <div className={styles.btn}>
        Download cv
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SideDetails;
