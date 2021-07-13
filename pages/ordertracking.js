import OrderedProducts from "../components/OrderTracking/OrderedProducts";
import OrderTimeline from "../components/OrderTracking/OrderTimeline";
import styles from "../styles/OrderTracking.module.css";
import Layout from './../components/Layout';
import Navbar from './../components/Navbar';
import OrderTimelineMobile from './../components/OrderTracking/OrderTimelineMobile';
import Footer from './../components/Footer/Footer';
import CancelOrderModal from "../components/OrderTracking/CancelOrderModal";
import { useEffect, useState } from "react";

function Ordertracking() {
    // const [windowSize, setWindowSize] = useState(null)
    // useEffect(() => {
    //     setWindowSize(window)
    // }, [])
    const windowSize = useWindowSize();

    console.log(windowSize)
    return (
        <Layout>
            <Navbar />
            <div className="page-bg">
                <div className="container">
                    <div className="row pb-5">
                        <h1 className={styles.title}>Order Tracking</h1>
                        <h2 className={styles.orderID}>Order ID: asdfasdf</h2>
                        {windowSize && windowSize.width < 480
                            ? <OrderTimelineMobile />
                            : <OrderTimeline />}

                        {/* <OrderTimelineMobile /> */}
                        <OrderedProducts />
                        <h2 className={styles.orderData}>Address: Earth, Milky Way</h2>
                        <h2 className={styles.orderData}>Payment Method: Bkash</h2>
                        <h2 className={styles.orderData}>Payment Details: 017855555</h2>
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" className={`btn btn-bg mt-5 ${ styles.cancelBTN }`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Cancel Order
                        </button>
                        <CancelOrderModal />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
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
        if (typeof window !== 'undefined') {
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

export default Ordertracking
