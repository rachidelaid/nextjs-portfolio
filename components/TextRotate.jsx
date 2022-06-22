import React from 'react';
import styles from '../styles/TextRotate.module.css';

import ReactRotatingText from 'react-rotating-text';

const TextRotate = () => (
  <div className={styles.text_rotate}>
    <p>
      &lt; <span>code</span> &gt;
    </p>
    <p className={styles.code}>
      I build{' '}
      <ReactRotatingText items={['web apps', 'mobile apps', 'desktop apps']} />
    </p>
    <p>
      &lt; <span>code</span> &gt;
    </p>
  </div>
);

export default TextRotate;
