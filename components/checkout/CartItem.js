import styles from "../../styles/Checkout.module.css";
import Image from "next/image";

const CartItem = () => {
  return (
    <div className={styles.itemContainer}>
      <Image
        src="/../public/biriyani.png"
        alt="Picture of the author"
        width={120}
        height={120}
      />
      <div>
        <h1>pizza</h1>
        <p>this is a desc</p>
      </div>
      <div></div>
    </div>
  );
};

export default CartItem;
