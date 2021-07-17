import CartItem from "../components/checkout/cartitem";
import Navbar from "../components/navbar";
import styles from "../styles/Checkout.module.css";
import { useSelector } from "react-redux";

import Link from "next/link";

const Checkout = () => {
  const cartList = useSelector((state) => state.order);
  let quantity = 0;
  let totalPrice = 0;
  cartList.map((item) => {
    quantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return (
    <div>
      <Navbar />
      <div className={styles.cartContainer}>
        {cartList.map((item, index) => {
          return <CartItem key={index} item={item} index={index} />;
        })}

        <div className={styles.paymentSec}>
          <h1>Total quantity {quantity}</h1>
          <div className={styles.qty}>
            <h1>Total: {totalPrice + 25} BDT</h1>
            <p>Including Delivery Charge : 25.00 BDT</p>
          </div>
          <Link href="/confirmorder">
            <button className="btn btn-primary">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
