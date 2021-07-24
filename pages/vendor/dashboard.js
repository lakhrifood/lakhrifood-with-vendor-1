import Navbar from "../../components/vendor/Navbar";
import Footer from "../../components/vendor/Footer/Footer";
import Image from "next/image";
import styles from "../../styles/vendor/Dashboard.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
const dashboard = () => {
  const [orders, setorders] = useState([]);
  const getAllVendorOrders = async () => {
    const vid = localStorage.getItem("vendorID");

    const { data } = await axios.get(
      `http://localhost:5000/order/business/${vid}`
    );
    setorders(data);
    console.log(data, "axios");
  };
  useEffect(() => {
    getAllVendorOrders();
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styles.background}>
        <div className="container">
          <h1 className={styles.h1}>Dashboard</h1>
          <div className={styles.header}>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Total Products</h4>
                <h2 className="h2">1340</h2>
              </div>
              <div>
                <i className={`fas fa-baby-carriage ${styles.headicon}`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Total Earnings</h4>
                <h2 className="h2">1340tk</h2>
              </div>
              <div>
                <i className={`fas fa-money-check-alt ${styles.headicon}`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Total Sale</h4>
                <h2 className="h2">1340</h2>
              </div>
              <div>
                <i className={`fas fa-shopping-basket ${styles.headicon}`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Successfull Order</h4>
                <h2 className="h2">450</h2>
              </div>
              <div>
                <i className={`fas fa-clipboard-check ${styles.headicon}`}></i>
              </div>
            </div>
          </div>
          <div className="activerOrder">
            <h1 className={styles.h1}>Orders</h1>
            <div className={styles.cardOrderSection}>
              {orders.map((order, index) => (
                <div className={styles.cardOrder}>
                  <div className={styles.firstCard}>
                    <div>
                      <Image
                        src="/../public/profile.png"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        className={styles.profilePic}
                      />
                      <h1>Rakib islam</h1>
                    </div>
                    <div>
                      <h4 className="h5">Order ID:#{order._id}</h4>
                      <Image
                        src="/../public/9-2-food-png-file.png"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        className={styles.profilePic}
                      />
                      <h3 className="h5">{order.productId.name}</h3>
                      <h2 className="h6"> Qty:{order.quantity}</h2>
                      <div className="row">
                        <div className="d-flex align-content-center">
                          <button className="btn btn-success">Accept</button>
                          <button className="btn btn-danger">Reject</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
