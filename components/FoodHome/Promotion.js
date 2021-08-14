import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
const Promotion = () => {
  return (
    <div className="pt-5">
      <h1 className={`${styles.headingpro} fw-bold`}>Promotion</h1>
      <div className={styles.promotionsContainer}>
        {/* <div className={styles.Proitems}>
          <div className={styles.Proitem}>
            <Image
              src="https://res.cloudinary.com/lakhrifood/image/upload/v1628140425/assests/maxresdefault_mfmbnz.png"
              alt="Picture of the author"
              width={350}
              height={210}
            />
            <h1>APPLY PROMO CODE</h1>
            <p>
              will be distracted by the readable content of a page when looking{" "}
            </p>
            <button type="button" className="btn btn-bg ms-2">
              Promo Code
            </button>
          </div>
        </div>
        <div className={styles.Proitems}>
          <div className={styles.Proitem}>
            <Image
              src="https://res.cloudinary.com/lakhrifood/image/upload/v1628140425/assests/10-Coupon-Vector_rz2qmv.png"
              alt="Picture of the author"
              width={350}
              height={210}
            />
            <h1>APPLY PROMO CODE</h1>
            <p>
              will be distracted by the readable content of a page when looking{" "}
            </p>
            <Link href="/menu?discount=true">
              <button type="button" className="btn btn-bg ms-2">
                See The Discount Item
              </button>
            </Link>
          </div>
        </div> */}
        <div className={styles.Proitems}>
          <div className={styles.Proitem}>
            <div className={styles.imageChar}></div>
            <div className={styles.infosec}>
              <h1>CHARITY AND DONATION</h1>
              <p>
                will be distracted by the readable content of a page when
                looking{" "}
              </p>
              <Link href="/charity">
                <button type="button" className={styles.btnChar}>
                  Donate Food at Charity
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.Proitems}>
          <div className={styles.Proitem}>
            <div className={styles.imageChar1}></div>
            <div className={styles.infosec}>
              <h1>APPLY PROMO CODE</h1>
              <p>
                will be distracted by the readable content of a page when
                looking{" "}
              </p>

              <button type="button" className={styles.btnChar}>
                Donate Food at Charity
              </button>
            </div>
          </div>
        </div>
        <div className={styles.Proitems}>
          <div className={styles.Proitem}>
            <div className={styles.imageChar2}></div>
            <div className={styles.infosec}>
              <h1>APPLY PROMO CODE</h1>
              <p>
                will be distracted by the readable content of a page when
                looking{" "}
              </p>

              <button type="button" className={styles.btnChar}>
                Donate Food at Charity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
