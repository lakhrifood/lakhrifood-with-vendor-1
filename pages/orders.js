import OrderCard from '../components/ordercard';
import styles from '../styles/OrderLIst.module.css';
import Layout from './../components/Layout';
import Navbar from './../components/navbar';
import Footer from './../components/Footer/footer';

function orders() {
    return (
        <Layout>
            <Navbar />
            <div className="page-bg">
                <div className="container">
                    <div className="row">
                        <h1 className={styles.title}>Order History</h1>
                    </div>
                    <div className="d-flex flex-wrap justify-content-around pt-5 pb-5">
                        <OrderCard />
                        {/* another one */}
                        <OrderCard />
                        {/* another one */}
                        <OrderCard />
                        {/* another one */}
                        <OrderCard />
                        {/* another one */}
                        <OrderCard />
                        {/* another one */}
                        <OrderCard />
                        {/* another one */}
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default orders
