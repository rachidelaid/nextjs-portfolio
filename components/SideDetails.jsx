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
    </div>
  );
};

export default SideDetails;
