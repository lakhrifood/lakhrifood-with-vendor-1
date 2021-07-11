import CartItem from "../components/checkout/CartItem";
import Navbar from "../components/Navbar";
import styles from "../styles/Checkout.module.css";
const checkout = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.cartContainer}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div className={styles.paymentSec}>
          <h1>Qty 3</h1>
          <div className={styles.qty}>
            <h1>Total: 625.00 BDT</h1>
            <p>Including Delivery Charge : 25.00 BDT</p>
          </div>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default checkout;
