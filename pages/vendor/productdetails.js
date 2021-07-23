import Navbar from '../../components/vendor/Navbar';
import Footer from '../../components/vendor/Footer/Footer';
import styles from '../../styles/VendorProductDetails.module.css';
import Image from 'next/image';

function productdetails() {
    return (
        <div>
            <Navbar />
            <div className="container pt-5 pb-5">
                <div className="d-flex flex-wrap justify-content-between">
                    <h1 className={styles.title}>Products</h1>
                    <button className={`ms-3 btn ${ styles.addProductBtn }`}>Add Product</button>
                </div>

                <div className="productWrapper mt-5">
                    <Image
                        width={500}
                        height={300}
                        className={styles.productImage}
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    />
                    <div className={styles.productInfo}>
                        <h2 className={styles.productTitle}>Product Title <small><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</small> </h2>
                        {/* rating */}
                        <h5 className={styles.ratingWrapper}>
                            <span className={` fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`ms-2 fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`ms-2 fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`ms-2 fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`ms-2 fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            (420)
                        </h5>
                        <p className={styles.productDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque vitae voluptates pariatur tempore animi consequatur laborum, dolorem laboriosam soluta.</p>
                        <h2 className={styles.category}>
                            <strong>Category: </strong>
                            Fast Food
                        </h2>
                        <h2 className={styles.category}>
                            <strong>Unit: </strong>
                            400
                        </h2>
                        <h2 className={styles.category}>
                            <strong>Price: </strong>
                            400 BDT
                        </h2>
                        <button className={`btn mt-2 ${ styles.addProductBtn }`}>Delete</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default productdetails
