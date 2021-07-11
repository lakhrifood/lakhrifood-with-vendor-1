import styles from "../../styles/Checkout.module.css";
import Image from "next/image";

const CartItem = () => {
  return (
    <div className={styles.itemContainer}>
      <Image
        src="/../public/biriyani.png"
        alt="Picture of the author"
        width={90}
        height={90}
      />
      <div className={styles.detItemSection}>
        <h1>pizza with peparoni</h1>
      </div>
      <div className={styles.quantity}>
        <button className={`btn`}>-</button>
        <h1>2</h1>
        <button className={`btn`}>+</button>
      </div>
      <i className={`fas fa-times ${styles.iconx}`}></i>
    </div>
  );
};

export default CartItem;
