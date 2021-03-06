import Navbar from "../../components/vendor/Navbar";
import Footer from "../../components/vendor/Footer/Footer";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../../styles/vendor/Dashboard.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setAuthFalse, setAuthTrue } from "../../state/reducers/UserAuth";
import router from "next/router";
import { getBalance } from "../../state/Api/payment";
import { getTotalSales } from "../../state/Api/order";

const Dashboard = () => {

  const [updatedStatus, setupdatedStatus] = useState({});
  const [totalEarning, setTotalEarning] = useState(null);
  const [pendingBalance, setPendingBalance] = useState(null);
  const [sales, setSales] = useState(null)
  const [orders, setorders] = useState([]);
  const getAllVendorOrders = async () => {

    const { data } = await axios.get(
      `https://peaceful-citadel-48843.herokuapp.com/order/business/${ localStorage.getItem("vendorID") }`
    );
    setorders(data);
    console.log(data, "axios");
  };

  // checking vendor status
  const [user, setuser] = useState({});
  const getUserProfile = async () => {
    const { data } = await axios.get(
      `https://peaceful-citadel-48843.herokuapp.com/business/one/${ localStorage.getItem("vendorID") }`
    );
    console.log(data.status, router, "mycat");
    setuser(data);
  };

  // checking login vendor
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.userAuth.authenticated);

  const checkLogin = async () => {
    const token = await localStorage.getItem("vtoken");
    const getName = await localStorage.getItem("vName");
    console.log(token)
    if (token) {
      dispatch(setAuthTrue());
      // await getUserProfile();
      const { data } = await getBalance(localStorage.getItem('vendorID'), "pending");
      setPendingBalance(data.amount);

      const totalearning = await getBalance(localStorage.getItem('vendorID'), "paid");
      setTotalEarning(totalearning.data.amount);

      const totalSales = await getTotalSales(localStorage.getItem('vendorID'));
      setSales(totalSales.data.totalSales);

      getAllVendorOrders();
    } else if (token === "") {
      dispatch(setAuthFalse());
      router.push("/vendor/signin");
    } else {
      router.push("/vendor/signin");
    }
  };


  useEffect(async () => {
    await checkLogin();
    { isAuthenticated === false && router.push("/vendor/signin") }
    
  }, [updatedStatus]);

  return (
    <div>
      <Navbar />
      <div className={styles.background}>
        <div className="container">
          <h1 className={styles.h1}>Dashboard</h1>
          <div className={styles.header}>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Pending Amount</h4>
                <h2 className="h2">{pendingBalance}</h2>
              </div>
              <div>
                <i className={`fas fa-baby-carriage ${ styles.headicon }`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Total Earnings</h4>
                <h2 className="h2">{totalEarning} BDT</h2>
              </div>
              <div>
                <i className={`fas fa-money-check-alt ${ styles.headicon }`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Total Sale</h4>
                <h2 className="h2">{sales}</h2>
              </div>
              <div>
                <i className={`fas fa-shopping-basket ${ styles.headicon }`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Successfull Order</h4>
                <h2 className="h2">{sales}</h2>
              </div>
              <div>
                <i className={`fas fa-clipboard-check ${ styles.headicon }`}></i>
              </div>
            </div>
          </div>
          <div className="activerOrder">
            <h1 className={styles.h1}>Orders</h1>

            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Pending Orders</Tab>
                <Tab>Accepted Orders</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className={styles.cardOrderSection}>
                    {orders.map((order, index) =>
                      order.product.orderStatus == "pending" ? (
                        <div className={styles.cardOrder}>
                          <div className={styles.firstCard}>
                            <div>
                              <h4 className="h5">Order ID:#{order.id}</h4>
                              <div>
                                <h1 className={styles.name}>
                                  <b> Ordered by:</b> {order.name}
                                </h1>
                              </div>
                              <Image
                                src={order.product.productId.imgURL}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                                className={styles.profilePic}
                              />
                              <h3 className="h5">
                                {order.product.productId.name}
                              </h3>
                              <h2 className="h6">
                                {" "}
                                Qty:{order.product.quantity}
                              </h2>
                              <div className="row">
                                <div className="d-flex align-content-center">
                                  <button
                                    className="btn btn-success me-3"
                                    onClick={async () => {
                                      const datas = {
                                        orderStatus: "accepted",
                                        _id: order.product._id,
                                        productId: order.product.productId._id,
                                        price: order.product.price,
                                        vendorID: order.product.vendorID,
                                        quantity: order.product.quantity,
                                        discount: order.product.discount,
                                      };
                                      const { data } = await axios.patch(
                                        `https://peaceful-citadel-48843.herokuapp.com/order/status/update/by/${ order.id }&${ order.product._id }`,
                                        datas
                                      );
                                      setupdatedStatus(data);
                                    }}
                                  >
                                    Accept
                                  </button>
                                  <button
                                    className="btn btn-danger"
                                    onClick={async () => {
                                      const datas = {
                                        orderStatus: "rejected",
                                        _id: order.product._id,
                                        productId: order.product.productId._id,
                                        price: order.product.price,
                                        vendorID: order.product.vendorID,
                                        quantity: order.product.quantity,
                                        discount: order.product.discount,
                                      };
                                      const { data } = await axios.patch(
                                        `https://peaceful-citadel-48843.herokuapp.com/order/status/update/by/${ order.id }&${ order.product._id }`,
                                        datas
                                      );
                                      setupdatedStatus(data);
                                    }}
                                  >
                                    Reject
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={styles.cardOrderSection}>
                    {orders.map((order, index) =>
                      order.product.orderStatus == "accepted" ? (
                        <div className={styles.cardOrder}>
                          <div className={styles.firstCard}>
                            <div>
                              <h4 className="h5">Order ID:#{order.id}</h4>
                              <div>
                                <h1 className={styles.name}>
                                  <b> Ordered by:</b> {order.name}
                                </h1>
                              </div>
                              <Image
                                src={order.product.productId.imgURL}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                                className={styles.profilePic}
                              />
                              <h3 className="h5">
                                {order.product.productId.name}
                              </h3>
                              <h2 className="h6">
                                Qty:{order.product.quantity}
                              </h2>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
