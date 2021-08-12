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
import { style } from "dom-helpers";
import axios from "axios";

const Confirmorder = () => {
  const dispatch = useDispatch();
  const [promo, setpromo] = useState("");
  const cartList = useSelector((state) => state.order);
  const [allAdress, setallAdress] = useState([]);
  const { globalDiscount } = useSelector((state) => state.food);
  let quantity = 0;
  let totalPrice = 0;
  let deliveryCharge = 25;
  const [address, setaddress] = useState(null);
  const [phone, setphone] = useState(null);
  const [depen, setdepen] = useState(null);
  const [newAdressBook, setnewAdressBook] = useState({
    address: "",
    phone: "",
    place: "",
    userID: "",
  });
  const [payment, setpayment] = useState("");
  const [userId, setuserId] = useState("");
  let productInfo = [];
  cartList.map((item) => {
    console.log(item.vendorID, "the item");
    quantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  const createAdress = async () => {
    const { data } = await axios.post(
      "https://peaceful-citadel-48843.herokuapp.com/addressBook",
      newAdressBook
    );

    setnewAdressBook({
      address: "",
      phone: "",
      place: "",
    });
    setdepen(data);
  };
  const getAllAdress = async () => {
    const { data } = await axios.get(
      `https://peaceful-citadel-48843.herokuapp.com/addressBook/${ localStorage.getItem("userId") }`
    );
    console.log(data, "pokachu");
    setallAdress(data);
  };
  const deleteAddress = async (id) => {
    const { data } = await axios.delete(
      `https://peaceful-citadel-48843.herokuapp.com/addressBook/${ id }`
    );
    setdepen(data);
  };
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
    const uid = localStorage.getItem("userId");
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
    setnewAdressBook({
      ...newAdressBook,
      userID: localStorage.getItem("userId"),
    });
    getAllAdress();
    await checkLogin();
    {
      !isAuthenticated && router.push("/auth/signin");
    }
    checkCred();
  }, [depen]);
  return (
    <div>
      <Navbar />
      <div className={`container ${ styles.containersConfirm }`}>
        <div>
          <h1 className={styles.headline}>Confirm Order</h1>
          <div className={styles.mainAdress}>
            {allAdress.length === 0 ? (
              <p className="text-danger">Add address inorder to make this order</p>
            ) : (
              <>
                {" "}
                {allAdress.map((item, i) => (
                  <div key={i} className={styles.addressWrapper}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={() => {
                          setaddress(item.address);
                          setphone(item.phone);
                        }}
                      />
                      <p>{item.place}</p>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        {item.address}
                      </label>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        {item.phone}
                      </label>
                    </div>
                    <div>
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => {
                          deleteAddress(item._id);
                        }}
                      ></i>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              value={newAdressBook.address}
              onChange={(e) =>
                setnewAdressBook({ ...newAdressBook, address: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Phone Number{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={newAdressBook.phone}
              onChange={(e) =>
                setnewAdressBook({ ...newAdressBook, phone: e.target.value })
              }
            />
          </div>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) =>
              setnewAdressBook({ ...newAdressBook, place: e.target.value })
            }
          >
            <option selected>Select Place</option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
            <option value="Others">Others</option>
          </select>
          {newAdressBook.place &&
            newAdressBook.phone &&
            newAdressBook.address &&
            newAdressBook.userID ? (
            <>
              {allAdress.length >= 3 ? (
                <>
                  <p>Please delete one adress inorder to add new adress</p>
                  <button
                    type="button"
                    disabled
                    className="btn btn-primary btn-lg mt-2"
                  >
                    Create
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-lg mt-2"
                  onClick={createAdress}
                >
                  Create
                </button>
              )}
            </>
          ) : (
            <>
              {allAdress.length >= 3 ? (
                <>
                  <p>Please delete one adress inorder to add new adress</p>
                  <button
                    type="button"
                    disabled
                    className="btn btn-primary btn-lg  mt-2"
                  >
                    Create
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  disabled
                  className="btn btn-primary btn-lg  mt-2"
                >
                  Create
                </button>
              )}
            </>
          )}
        </div>
        <div className={styles.containerBill}>
          <h5 className={styles.headline}>Your Order </h5>
          <div className={` ${ styles.containeritems }`}>
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
                {address == null && phone == null ? (
                  <button
                    type="button"
                    className={`btn btn-lg btn-primary ${ styles.btnGhor }`}
                    disabled
                  >
                    Checkout
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`btn btn-lg btn-primary ${ styles.btnGhor }`}
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

export default Confirmorder;
