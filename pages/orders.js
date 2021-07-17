import OrderCard from "../components/OrderCard";
import styles from "../styles/OrderLIst.module.css";
import Layout from "./../components/Layout";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer/Footer";

import { getOrderByUserID } from "../state/Api/order";
import { useState, useEffect } from "react";

function orders() {
  const [orders, setorders] = useState([]);

  const getOrders = async () => {
    const uid = localStorage.getItem("userId");
    const { data } = await getOrderByUserID(uid);
    console.log(data, "printindddd");
    setorders(data);
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <Layout>
      <Navbar />
      <div className="page-bg">
        <div className="container">
          <div className="row">
            <h1 className={styles.title}>Order History</h1>
          </div>
          <div className="d-flex flex-wrap justify-content-around pt-5 pb-5">
            {orders.map((order) => (
              <OrderCard order={order} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default orders;
