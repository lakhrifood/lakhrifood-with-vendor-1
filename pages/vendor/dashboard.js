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

const Dashboard = () => {

  const [updatedStatus, setupdatedStatus] = useState({});

  const [orders, setorders] = useState([]);
  const [pendingAmount, setpendingAmount] = useState(0);
  const getAllVendorOrders = async () => {
    const vid = localStorage.getItem("vendorID");

    const { data } = await axios.get(
      `http://localhost:5000/order/business/${ vid }`
    );
    setorders(data);
    console.log(data, "axios");
  };

  // checking vendor status
  const [user, setuser] = useState({});
  const getUserProfile = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/business/one/${ localStorage.getItem("vendorID") }`
    );
    console.log(data.status, router, "mycat");
    setuser(data);
  };

  // checking login vendor
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.userAuth.authenticated);

  const checkLogin = () => {
    const token = localStorage.getItem("vtoken");
    const getName = localStorage.getItem("vName");
    if (token) {
      dispatch(setAuthTrue());
    } else if (!token) {
      dispatch(setAuthFalse());
    }
  };


  const countDashAmount = () => {
    orders.map((order, index) => {
      if (order.product.orderStatus == "accepted") {
        const oneOrder =
          order.product.quantity * order.product.price - order.product.discount;
        console.log(oneOrder, "accepted");
        setpendingAmount(pendingAmount + oneOrder);
      }
    });
  };
  useEffect(async () => {
    getAllVendorOrders();

    await checkLogin();
    { isAuthenticated === false && router.push("/vendor/signin") }
    await getUserProfile();
    { user.status === "false" && router.push("/vendor/waiting") }
    countDashAmount();
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
                <h2 className="h2">{pendingAmount}</h2>
              </div>
              <div>
                <i className={`fas fa-baby-carriage ${ styles.headicon }`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Total Earnings</h4>
                <h2 className="h2">1340tk</h2>
              </div>
              <div>
                <i className={`fas fa-money-check-alt ${ styles.headicon }`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Total Sale</h4>
                <h2 className="h2">1340</h2>
              </div>
              <div>
                <i className={`fas fa-shopping-basket ${ styles.headicon }`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Successfull Order</h4>
                <h2 className="h2">450</h2>
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
                                    className="btn btn-success"
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
                                        `http://localhost:5000/order/status/update/by/${ order.id }&${ order.product._id }`,
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
                                        `http://localhost:5000/order/status/update/by/${ order.id }&${ order.product._id }`,
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
                        "No order"
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
                        "No Accepted order"
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
