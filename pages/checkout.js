import CartItem from "../components/checkout/CartItem";
import Navbar from "../components/Navbar";
import styles from "../styles/Checkout.module.css";
import { useSelector } from "react-redux";
const checkout = () => {
  const cartList = useSelector((state) => state.order);
  let quantity = 0;
  cartList.map((item) => {
    quantity += item.quantity;
  });
  return (
    <div>
      <Navbar />
      <div className={styles.cartContainer}>
        {cartList.map((item, index) => {
          return <CartItem key={index} item={item} index={index} />;
        })}
        {/* <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem /> */}
        <div className={styles.paymentSec}>
          <h1>Total quantity {quantity}</h1>
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
