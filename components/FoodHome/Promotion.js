import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
const Promotion = () => {
  return (
    <div>
      <h1 className={styles.headingpro}>Promotion</h1>
      <div className={styles.promotionsContainer}>
        <div className={styles.Proitems}>
          <div className={styles.Proitem}>
            <Image
              src="/../public/modern-big-sale-discount-all-260nw-1623606355.png"
              alt="Picture of the author"
              width={350}
              height={210}
            />
            <h1>APPLY PROMO CODE</h1>
            <p>
              will be distracted by the readable content of a page when looking{" "}
            </p>
            <button type="button" className="btn btn-primary">
              Promo Code
            </button>
          </div>
        </div>
        <div className={styles.Proitems}>
          <div className={styles.Proitem}>
            <Image
              src="/../public/modern-big-sale-discount-all-260nw-1623606355.png"
              alt="Picture of the author"
              width={350}
              height={210}
            />
            <h1>APPLY PROMO CODE</h1>
            <p>
              will be distracted by the readable content of a page when looking{" "}
            </p>
            <button type="button" className="btn btn-primary">
              Promo Code
            </button>
          </div>
        </div>
        <div className={styles.Proitems}>
          <div className={styles.Proitem}>
            <Image
              src="/../public/promo-code-coupon-code-flat-set-design-on-white-vector-24176056.png"
              alt="Picture of the author"
              width={350}
              height={210}
            />
            <h1>APPLY PROMO CODE</h1>
            <p>
              will be distracted by the readable content of a page when looking{" "}
            </p>
            <button type="button" className="btn btn-primary">
              Promo Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
