import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from "../styles/HomechefDetails.module.css";

function HomechefDetails({ homechef }) {
    return (
        <div>
            <div className={styles.headerImage}>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <div className="container">
                        <div className="col-md-2">
                            <Image
                                width={200}
                                height={200}
                                className={styles.homechefLogo}
                                src={homechef && homechef.imgURL} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-2">
                        {/* <Image width={200} height={200} className={styles.homechefLogo} src="/./KFC-LOGO.png" /> */}
                    </div>
                    <div className={`col-md-10 p-5 ${ styles.homechefDetailsWrapper }`}>
                        <h2 className={styles.pTitle} >{homechef.organizationName}</h2>
                        <h3 className={styles.subTitle}>{homechef.bio}</h3>
                        <p className={styles.pDetails}>{homechef.description}</p>
                        <p className={styles.pAmountOfCalPro}><small className="me-4">Delivery Time : {homechef.estimatedDeliveryTime} </small> Delivery Charge Free</p>
                        <h5 className={styles.pReting}>
                            <span className={`ms-3 fa fa-star ${ styles.starIcon } ${ Math.round(homechef.averageRating) >= 1 && styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ Math.round(homechef.averageRating) >= 2 && styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ Math.round(homechef.averageRating) >= 3 && styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ Math.round(homechef.averageRating) >= 4 && styles.checked }`}></span>
                            <span className={`me-3 fa fa-star ${ styles.starIcon } ${ Math.round(homechef.averageRating) >= 5 && styles.checked }`}></span>
                            ({homechef.allRatings.length})
                        </h5>
                        <button className={`btn btn-bg ${ styles.seeHomechefProductBtn }`}>SEE HOME CHEFS PRODUCT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomechefDetails
