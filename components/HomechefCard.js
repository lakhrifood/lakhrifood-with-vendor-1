import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/ProductCard.module.css';

function HomechefCard() {
    return (
        <div className={`card ${ styles.productCard }`}>
            <Image
                src="/./Home chef_1 (2).png"
                width="100%"
                height="280px"
                className={`card-img-top ${ styles.cardImage }`}
                alt="..." />
            <div className="card-body">
                <h5>Pizza  Item <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                    <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                    <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                    <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                    <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum.</p>
                <p><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</p>
            </div>
        </div>
    )
}

export default HomechefCard
