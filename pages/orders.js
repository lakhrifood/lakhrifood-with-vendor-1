import OrderCard from '../components/OrderCard';
import styles from '../styles/OrderLIst.module.css';
import Layout from './../components/Layout';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer/Footer';

function orders() {
    return (
        <Layout>
            <Navbar />
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
            <Footer />
        </Layout>
    )
}

export default orders
