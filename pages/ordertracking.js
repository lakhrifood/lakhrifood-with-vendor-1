import OrderedProducts from "../components/OrderTracking/OrderedProducts";
import OrderTimeline from "../components/OrderTracking/OrderTimeline";
import styles from "../styles/OrderTracking.module.css";
import Layout from './../components/Layout';
import Navbar from './../components/Navbar';
import OrderTimelineMobile from './../components/OrderTracking/OrderTimelineMobile';
import Footer from './../components/Footer/Footer';
import CancelOrderModal from "../components/OrderTracking/CancelOrderModal";

function ordertracking() {
    return (
        <Layout>
            <Navbar />
            <div className="page-bg">
                <div className="container">
                    <div className="row pb-5">
                        <h1 className={styles.title}>Order Tracking</h1>
                        <h2 className={styles.orderID}>Order ID: asdfasdf</h2>
                        <OrderTimeline />
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

export default ordertracking
