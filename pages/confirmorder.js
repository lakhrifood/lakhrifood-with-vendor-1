import styles from "../styles/ConfirmOrder.module.css";

import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { createOrderAction } from "../state/action/OrderAction";

const confirmorder = () => {
  const cartList = useSelector((state) => state.order);
  const dispatch = useDispatch();
  let quantity = 0;
  let totalPrice = 0;
  let deliveryCharge = 25;
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [payment, setpayment] = useState("");
  const [userId, setuserId] = useState("");
  let productInfo = [];
  cartList.map((item) => {
    quantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  console.log(cartList, "cartList");
  const checkoutOrder = async () => {
    cartList.map((item) => {
      productInfo.push({
        productId: item.productId,

        price: item.price,
        quantity: item.quantity,
        discount: item.discount,
      });
    });
    dispatch(
      createOrderAction({
        deliveryAddress: address,
        paymentType: payment,
        userId: userId,
        userPhone: phone,
        productInfo,
      })
    );
    console.log({
      deliveryAddress: address,
      paymentType: payment,
      userId: userId,
      userPhone: phone,
      productInfo,
    });
  };
  const checkCred = () => {
    const phoneNumber = localStorage.getItem("phoneNumber");
    const uid = localStorage.getItem("userId");
    setphone(phoneNumber);
    setuserId(uid);
  };
  useEffect(() => {
    checkCred();
  }, []);
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.containersConfirm}`}>
        <div>
          <h1 className={styles.headline}>Confirm Order</h1>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Phone Number{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={phone}
            />
          </div>
          <div>
            <h1 className={styles.headline}>Payment section</h1>
            <div className={styles.paymentSection}>
              <div className={`${styles.payItem}`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={() => setpayment("Bkash")}
                />

                <h5>Bkash</h5>
              </div>

              <div className={`${styles.payItem}`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={() => setpayment("DBBL")}
                />

                <h5>DBBL</h5>
              </div>

              <div className={`${styles.payItem}`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={() => setpayment("NAGAD")}
                />

                <h5>NAGAD</h5>
              </div>

              <div className={`${styles.payItem}`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={() => setpayment("Rocket")}
                />

                <h5>Rocket</h5>
              </div>

              <div className={`${styles.payItem}`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={() => setpayment("Cash")}
                />
                <h5>Cash on delivery</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerBill}>
          <h5 className={styles.headline}>
            Your Order{" "}
            <h6 className={`card-subtitle mb-2 text-muted `}>
              Tracking ID #ansdnj
            </h6>
          </h5>
          <div className={` ${styles.containeritems}`}>
            <div className={styles.itemCheck}>
              <h5>Quantity </h5>
              <h5> {quantity}</h5>
            </div>
            <div className={styles.itemCheck}>
              <h5>Price </h5>
              <h5> {totalPrice} BDT</h5>
            </div>
            <div className={styles.itemCheck}>
              <h5>Delivery Charge </h5>
              <h5> {deliveryCharge}BDT</h5>
            </div>
            <div className={styles.itemCheck}></div>
            <div className={styles.itemCheck}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Promo code"
                aria-label="Enter Promo code"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  check
                </button>
              </div>
            </div>
            <div className={styles.itemCheck}>
              <h5 className={styles.headline}>Total </h5>
              <h5 className={styles.headline}>
                {totalPrice + deliveryCharge}BDT
              </h5>
            </div>
            <div>
              <Link href="/orders">
                <button
                  type="button"
                  className={`btn btn-lg btn-primary ${styles.btnGhor}`}
                  onClick={() => {
                    checkoutOrder();
                  }}
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default confirmorder;
