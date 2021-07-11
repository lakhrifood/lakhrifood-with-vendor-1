import Image from 'next/image';
import React from 'react'
import styles from "../styles/HomechefDetails.module.css";

function HomechefDetails() {
    return (
        <div>
            <div className={styles.headerImage}>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <div className="container">
                        <div className="col-md-2">
                            <Image width={200} height={200} className={styles.homechefLogo} src="/./KFC-LOGO.png" />
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
                        <h2 className={styles.pTitle} >KFC</h2>
                        <h3 className={styles.subTitle}>Chinese | Thai Food | BBQ | Chili Chiken Fry</h3>
                        <p className={styles.pDetails}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam repellendus, similique cumque voluptate possimus modi rem aspernatur aliquid nihil consectetur explicabo reprehenderit dolore reiciendis totam.</p>
                        <p className={styles.pAmountOfCalPro}><small className="me-4">Delivery Time : 35 Min </small> Delivery Charge Free</p>
                        <h5 className={styles.pReting}><span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)
                        </h5>
                        <button className={`btn btn-bg ${ styles.seeHomechefProductBtn }`}>SEE HOME CHEFS PRODUCT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomechefDetails
