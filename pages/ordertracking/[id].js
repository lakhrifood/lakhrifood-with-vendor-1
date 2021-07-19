import OrderedProducts from "../../components/OrderTracking/orderedproducts";
import OrderTimeline from "../../components/OrderTracking/ordertimeline";
import Router from "next/router";
import styles from "../../styles/OrderTracking.module.css";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import OrderTimelineMobile from "../../components/OrderTracking/ordertimelinemobile";
import Footer from "../../components/Footer/Footer";
import CancelOrderModal from "../../components/OrderTracking/CancelOrderModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { getOrderbyidAction } from "../../state/action/FoodActions";

function Ordertracking() {
  const route = useRouter();
  const id = route.asPath.split("id=")[1];
  const windowSize = useWindowSize();
  const dispatch = useDispatch();
  const { orderFood } = useSelector((state) => state.food);


  const getOrder = async () => {
    dispatch(getOrderbyidAction(id));
  };
  useEffect(() => {
    getOrder();
    if (orderFood == null) {
      Router.push("/orders");
    }
  }, []);
  return (
    <Layout>
      <Navbar />
      <div className="page-bg">
        <div className="container">
          <div className="row pb-5">
            <h1 className={styles.title}>Order Tracking</h1>
            <h2 className={styles.orderID}>Order ID: #{orderFood?._id}</h2>
            {/* {windowSize && windowSize.width < 480 ? (
              <OrderTimelineMobile />
            ) : (
              <OrderTimeline />
            )} */}

            {/* <OrderTimelineMobile /> */}
            <OrderedProducts products={orderFood && orderFood} />
            <h2 className={styles.orderData}>
              Address:{orderFood?.deliveryAddress}
            </h2>
            <h2 className={styles.orderData}>
              Payment Method: {orderFood?.paymentType}
            </h2>
            <h2 className={styles.orderData}>
              Payment Details:{orderFood?.userPhone}
            </h2>
            {/* <!-- Button trigger modal --> */}
            {/* <button
              type="button"
              className={`btn btn-bg mt-5 ${styles.cancelBTN}`}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Cancel Order
            </button> */}
            {/* <CancelOrderModal /> */}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Ordertracking;
