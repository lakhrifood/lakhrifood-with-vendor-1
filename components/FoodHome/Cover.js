import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
const Cover = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.textCon}>
        <h1>
          Set Meals <span className={styles.blueTxt}>Delivery</span> In Dhaka
        </h1>
        <p>Choose a set or combine your own and get your order in time.</p>
        <div className={`input-group mb-3 ${styles.searchField}`}>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Area"
            aria-label="Enter Your Area"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className={styles.imgSection}>
        <Image
          src="/../public/9-2-food-png-file.png"
          alt="Picture of the author"
          width={600}
          height={350}
        />
      </div>
    </div>
  );
};

export default Cover;