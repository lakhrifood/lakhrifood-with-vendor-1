import styles from "../styles/Pay.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";
const paymenthistory = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Payment History</h1>
        <ul className={styles.conULHead}>
          <div class="">Ordered Item</div>
          <div class="">Date</div>
          <div class="">Payment Method</div>
          <div class="">Status</div>
          <div class="">Amount</div>
        </ul>
        <ul className={styles.conUL}>
          <div className={styles.conDiv}>
            <Image
              src="/../public/Rectangle 31.png"
              alt="Picture of the author"
              width={50}
              height={50}
              className={styles.profilePic}
            />
            Pizza
          </div>
          <div class="">21 July 2021</div>
          <div class="">Bkash</div>
          <div class="">
            <h3 class="text-success">Paid</h3>
          </div>
          <div class="">260.00 BDT</div>
        </ul>
        <ul className={styles.conUL}>
          <div className={styles.conDiv}>
            <Image
              src="/../public/Rectangle 31.png"
              alt="Picture of the author"
              width={50}
              height={50}
              className={styles.profilePic}
            />
            Pizza
          </div>
          <div class="">21 July 2021</div>
          <div class="">Bkash</div>
          <div class="">
            <h3 class="text-success">Paid</h3>
          </div>
          <div class="">260.00 BDT</div>
        </ul>
      </div>
    </div>
  );
};

export default paymenthistory;
