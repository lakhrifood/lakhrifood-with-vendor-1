import Image from 'next/image';
import Layout from '../../components/Layout';
import AllProducts from '../../components/vendor/AllProducts';
import Head from '../../components/vendor/Head';
import AddProduct from '../../components/vendor/Modal/AddProduct';
import MostClickedProducts from '../../components/vendor/MostClickedProducts';
import Navbar from '../../components/vendor/Navbar';
import PopulerProduct from '../../components/vendor/PopulerProduct';
import styles from '../../styles/products.module.css';

function products() {
    return (
        <Layout>
            <Navbar />
            <div className="container">
                <Head />
                <h4 className={styles.title}>My Products <AddProduct /> </h4>
                {/* Most popular products */}
                <PopulerProduct />
                {/* Most Clicked products start */}
                <MostClickedProducts />
                {/* All products start */}
                <AllProducts />
            </div>
        </Layout>
    )
}

export default products
