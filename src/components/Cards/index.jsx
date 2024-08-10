import React, { useEffect, useState } from 'react';
import data from '../../data.json';
import styles from './index.module.css';

function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div key={products.id} className={styles.card}>
          <img src={products.image} alt={products.title} />
          <h3>{products.name}</h3>
        </div>
      </div>

      <div className={styles.card}>
        <img src="" alt="" />
        <h3>{products.title}</h3>
      </div>

      <div className={styles.card}>
        <img src="" alt="" />
        <h3>title</h3>
      </div>

      <div className={styles.card}>
        <img src="" alt="" />
        <h3>title</h3>
      </div>

      <div className={styles.card}>
        <img src="" alt="" />
        <h3>title</h3>
      </div>

      <div className={styles.card}>
        <img src="" alt="" />
        <h3>title</h3>
      </div>

      <div className={styles.card}>
        <img src="" alt="" />
        <h3>title</h3>
      </div>

      <div className={styles.card}>
        <img src="" alt="" />
        <h3>title</h3>
      </div>

      <div className={styles.card}>
        <img src="" alt="" />
        <h3>title</h3>
      </div>

      <div className={styles.card}>
        <img src="" alt="" />
        <h3>title</h3>
      </div>
    </div>
  )
}

export default Cards