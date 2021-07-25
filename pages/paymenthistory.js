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
          <div className="">Ordered Item</div>
          <div className="">Date</div>
          <div className="">Payment Method</div>
          <div className="">Status</div>
          <div className="">Amount</div>
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
          <div className="">21 July 2021</div>
          <div className="">Bkash</div>
          <div className="">
            <h3 className="text-success">Paid</h3>
          </div>
          <div className="">260.00 BDT</div>
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
          <div className="">21 July 2021</div>
          <div className="">Bkash</div>
          <div className="">
            <h3 className="text-success">Paid</h3>
          </div>
          <div className="">260.00 BDT</div>
        </ul>
      </div>
    </div>
  );
};

export default paymenthistory;
