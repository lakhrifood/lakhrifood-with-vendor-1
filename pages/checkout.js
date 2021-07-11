import CartItem from "../components/checkout/CartItem";
import Navbar from "../components/Navbar";
import styles from "../styles/Checkout.module.css";
const checkout = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.cartContainer}>
        <CartItem />
      </div>
    </div>
  );
};

export default checkout;
