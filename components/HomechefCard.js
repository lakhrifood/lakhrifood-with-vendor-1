
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/ProductCard.module.css';

function HomechefCard({ business }) {
    return (
        <Link href={`/homechef/${ business && business.organizationName }?id=${ business && business._id }`}>
            <div className={`card ${ styles.productCard }`}>
                {business &&
                    <>
                        <Image
                            src={business.imgURL}
                            width="100%"
                            height="280px"
                            className={`card-img-top ${ styles.cardImage }`}
                            alt="..." />
                        <div className="card-body">
                            <h5>{business.organizationName}
                                <span className={`ms-3 fa fa-star ${ styles.starIcon } ${ Math.round(business.averageRating) >= 1 && styles.checked }`}></span>
                                <span className={`fa fa-star ${ styles.starIcon } ${ Math.round(business.averageRating) >= 2 && styles.checked }`}></span>
                                <span className={`fa fa-star ${ styles.starIcon } ${ Math.round(business.averageRating) >= 3 && styles.checked }`}></span>
                                <span className={`fa fa-star ${ styles.starIcon } ${ Math.round(business.averageRating) >= 4 && styles.checked }`}></span>
                                <span className={`me-3 fa fa-star ${ styles.starIcon } ${ Math.round(business.averageRating) >= 5 && styles.checked }`}></span>
                                ({business.allRatings.length})</h5>
                            <p>{business.description}</p>
                            <p><i className="far fa-clock me-1"></i> Delivery Time : {business.estimatedDeliveryTime}</p>
                        </div>
                    </>}
            </div>
        </Link>
    )
}

export default HomechefCard
