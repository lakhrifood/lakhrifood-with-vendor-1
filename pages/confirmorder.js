import styles from "../styles/ConfirmOrder.module.css";
import Router from "next/router";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  createOrderAction,
  setDiscountbyPromoCode,
} from "../state/action/OrderAction";
import router from "next/router";
import { setAuthFalse, setAuthTrue } from "../state/reducers/UserAuth";

const confirmorder = () => {
  const cartList = useSelector((state) => state.order);
  const { globalDiscount } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const [promo, setpromo] = useState("");
  let quantity = 0;
  let totalPrice = 0;
  let deliveryCharge = 25;
  const [address, setaddress] = useState(null);
  const [phone, setphone] = useState("");
  const [payment, setpayment] = useState("");
  const [userId, setuserId] = useState("");
  let productInfo = [];
  cartList.map((item) => {
    console.log(item.vendorID, "the item");
    quantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  const setPromoDiscount = () => {
    if (promo) {
      dispatch(setDiscountbyPromoCode(promo));
    }
  };
  const checkoutOrder = async () => {
    cartList.map((item) => {
      console.log(item.vendorID._id, "the item");
      productInfo.push({
        productId: item.productId,
        price: item.price,
        vendorID: item.vendorID,
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
        globalDiscount: globalDiscount ? globalDiscount : 0,
      })
    );
  };
  const checkCred = () => {
    const phoneNumber = localStorage.getItem("phoneNumber");
    const uid = localStorage.getItem("userId");
    setphone(phoneNumber);
    setuserId(uid);
    if (quantity == 0) {
      Router.push("/");
    }
  };

  // check if user is logged in\
  const isAuthenticated = useSelector((state) => state.userAuth.authenticated);
  const checkLogin = () => {
    const token = localStorage.getItem("token");
    const getName = localStorage.getItem("userName");
    if (token) {
      dispatch(setAuthTrue());
    } else {
      dispatch(setAuthFalse());
    }
  };

  useEffect(async () => {
    await checkLogin();
    {
      !isAuthenticated && router.push("/auth/signin");
    }
    checkCred();
  }, []);
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.containersConfirm}`}>
        <div>
          <h1 className={styles.headline}>Confirm Order</h1>

          <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Phone Number{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={phone}
            />
          </div>
        </div>
        <div className={styles.containerBill}>
          <h5 className={styles.headline}>Your Order </h5>
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
            {globalDiscount ? (
              <div className={styles.itemCheck}>
                <h5>Voucher Discount </h5>
                <h5> {globalDiscount}BDT</h5>
              </div>
            ) : null}
            <div className={styles.itemCheck}></div>
            <div className={styles.itemCheck}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Promo code"
                aria-label="Enter Promo code"
                aria-describedby="basic-addon2"
                value={promo}
                onChange={(e) => setpromo(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => {
                    setPromoDiscount();
                  }}
                >
                  check
                </button>
              </div>
            </div>
            <div className={styles.itemCheck}>
              <h5 className={styles.headline}>Total </h5>
              <h5 className={styles.headline}>
                {globalDiscount
                  ? totalPrice + deliveryCharge - globalDiscount
                  : totalPrice + deliveryCharge}
                BDT
              </h5>
            </div>
            <div>
              <Link href="/orders">
                {address === null ? (
                  <button
                    type="button"
                    className={`btn btn-lg btn-primary ${styles.btnGhor}`}
                    disabled
                  >
                    Checkout
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`btn btn-lg btn-primary ${styles.btnGhor}`}
                    onClick={() => {
                      checkoutOrder();
                    }}
                  >
                    Checkout
                  </button>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default confirmorder;
