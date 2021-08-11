import CartItem from "../components/checkout/CartItem";
import Navbar from "../components/Navbar";
import styles from "../styles/Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { setAuthFalse, setAuthTrue } from "../state/reducers/UserAuth";

const Checkout = ({ user }) => {
  console.log(user, "user");
  const cartList = useSelector((state) => state.order);
  const router = useRouter();
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const isAuthenticated = useSelector((state) => state.userAuth.authenticated);

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    const getName = localStorage.getItem("userName");
    setname(getName);
    if (token) {
      dispatch(setAuthTrue());
    } else {
      dispatch(setAuthFalse());
    }
  };
  useEffect(async () => {
    await checkLogin();
  }, []);

  let quantity = 0;
  let totalPrice = 0;
  cartList.map((item) => {
    quantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return (
    <div>
      <Navbar />
      {quantity == 0 ? (
        <div className={styles.emptyCard}>
          <Image
            src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139306/assests/empty_wiammp.png"
            alt="empty card"
            width={390}
            height={270}
          />
          <h1 className={styles.emptyCardH1}>Empty Cart</h1>
        </div>
      ) : (
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
          </div>
          <div className={styles.boxCheckout}>
            <Link href={"/menu"}>
              <button className={`btn ${styles.boxContinue}`}>
                Continue Shopping
              </button>
            </Link>
            <Link href={isAuthenticated ? "/confirmorder" : "/auth/signin"}>
              <button className="btn btn-primary">Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
