import React, { useState } from 'react';
import styles from './index.module.css';

function Filter() {
  const [price, setPrice] = useState(0);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSearch = () => {
  };

  const handleReset = () => {
    setPrice(0);
  };
        
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.main}>
                <span>  
                <p>Search Product</p>
                <input type="text" required/>
                </span>

                <span>  
                <p>Select Category</p>
                <select>
                    <option value="all">all</option>
                    <option value="Tables">Tables</option>
                    <option value="Chairs">Chairs</option>
                    <option value="Kids">Kids</option>
                    <option value="Sofas">Sofas</option>
                    <option value="Beds">Beds</option>
                </select>
                </span>

                <span>  
                <p>Select Company</p>
                <select>
                    <option value="">all</option>
                    <option value="">Modenza</option>
                    <option value="">Luxora</option>
                    <option value="">Artifex</option>
                    <option value="">Comfora</option>
                    <option value="">Homestead</option>
                </select>
                </span>

                <span>  
                <p>Sort By</p>
                <select>
                    <option value="">a-z</option>
                    <option value="">z-a</option>
                    <option value="">high</option>
                    <option value="">low</option>
                </select>
                </span>
            </div>
            <div className={styles.priceSection}>
              <div className={styles.sliderContainer}>
                <p>Select Price</p>
                <span className={styles.price}>${price}.00</span>
                <input 
                  type="range" 
                  min="0" 
                  max="1000" 
                  value={price} 
                  className={styles.slider} 
                  onChange={handlePriceChange}
                />
                <div className={styles.rangeLabel}>
                  <span>0</span>
                  <span>Max : $1,000.00</span>
                </div>
              </div>
              <div className={styles.extraOptions}>
                <label>
                  Free Shipping
                  <input type="checkbox" />
                </label>
                <button className={`${styles.searchButton}`} onClick={handleSearch}>SEARCH</button>
                <button className={`${styles.resetButton}`} onClick={handleReset}>RESET</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Filter