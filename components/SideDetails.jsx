import React from 'react';
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

      <div className={styles.languages}>
        <div>
          <div className={styles.graph}>
            <svg viewBox="0 0 100 100">
              <path
                d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                stroke="#eee"
              ></path>
              <path
                d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                stroke="#555"
                style={{
                  'stroke-dasharray': '292.209px, 292.209px',
                  'stroke-dashoffset': 0,
                }}
              ></path>
            </svg>
            <div className={styles.progress}>100%</div>
          </div>

          <h6>Arabic</h6>
        </div>

        <div>
          <div className={styles.graph}>
            <svg viewBox="0 0 100 100">
              <path
                d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                stroke="#eee"
              ></path>
              <path
                d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                stroke="#555"
                style={{
                  'stroke-dasharray': '292.209px, 292.209px',
                  'stroke-dashoffset': '29.2209px',
                }}
              ></path>
            </svg>
            <div className={styles.progress}>90%</div>
          </div>

          <h6>English</h6>
        </div>

        <div>
          <div className={styles.graph}>
            <svg viewBox="0 0 100 100">
              <path
                d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                stroke="#eee"
              ></path>
              <path
                d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                stroke="#555"
                style={{
                  'stroke-dasharray': '292.209px, 292.209px',
                  'stroke-dashoffset': '87.6626px',
                }}
              ></path>
            </svg>
            <div className={styles.progress}>70%</div>
          </div>

          <h6>French</h6>
        </div>
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
