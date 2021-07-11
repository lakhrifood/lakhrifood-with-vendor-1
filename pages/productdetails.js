import React, { useState } from 'react'
import Layout from './../components/Layout';
import Navbar from './../components/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import styles from '../styles/ProductDetails.module.css'



function Productdetails() {

    const [value, setValue] = useState(0);

    const handleSlider = index => {
        setValue(index);
    }

    return (
        <Layout>
            <Navbar />
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Carousel
                            showThumbs={true}
                            thumbWidth={80}
                            showIndicators={false}
                            showArrows={false}
                            autoPlay
                        >
                            <div>
                                <img width={200} height={150} src="/./pizza-beer-1200x628-facebook-1200x628.png" />
                            </div>
                            <div>
                                <img width={200} height={150} src="/./pizza-beer-1200x628-facebook-1200x628a.png" />
                            </div>
                            <div>
                                <img width={200} height={150} src="/./pizza-beer-1200x628-facebook-1200x628aa.png" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.productDetailsWrapper}>
                            <h1 className={styles.pTitle}>Pizza  Item</h1>
                            <h5 className={styles.pReting}><span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                                <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                                <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                                <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                                <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)
                                <small><i className="far fa-clock ms-3 me-1"></i> Delivery Time : 35 Min</small>
                            </h5>
                            <h6 className={styles.pAmountOfCalPro}>250 gm Cal | 40 gm Protein</h6>
                            <h4 className={styles.subTitle}>Description</h4>
                            <p className={styles.pDetails}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam doloribus dolores quibusdam ex? Assumenda.</p>
                            <div className={styles.priceAndQuantityWrapper}>
                            <h4 className={styles.pPrice}>150.00 BDT</h4>
                            <div className={styles.quantityWrapper}>
                                <input type="submit" className={styles.decrement} value="-" />
                                <input type="number" value="1" name="" id="" />
                                <input type="submit" className={styles.increment} value="+" />
                            </div>
                            </div>
                            <button className={`btn btn-bg ${styles.addCartBtn}`}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Productdetails
