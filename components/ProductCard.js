import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ product }) {

    return (
        <Link href={`/product/${ product && product.name }?id=${ product && product._id }`}>
            <div className={`card ${ styles.productCard }`}>
                <Image
                    src={product && product.imgURL || "/./pizza-beer-1200x628-facebook-1200x628.png"}
                    width="100%"
                    height="280px"
                    className={`card-img-top ${ styles.cardImage }`}
                    alt="..." />
                <div className="card-body">
                    <h5>{product && product.name}
                        <span className={`ms-2 fa fa-star ${ styles.starIcon } ${ Math.round(product && product.averageRating) >= 1 && styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ Math.round(product && product.averageRating) >= 2 && styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ Math.round(product && product.averageRating) >= 3 && styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ Math.round(product && product.averageRating) >= 4 && styles.checked }`}></span>
                        <span className={`me-2 fa fa-star ${ styles.starIcon } ${ Math.round(product && product.averageRating) >= 5 && styles.checked }`}></span>
                        ({product && product.allRatings.length})</h5>
                    <p>{product && product.description.slice(0, 60)}...</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>{product && product.price} BDT</h3>
                        <button className="btn btn-bg">
                            <i className="fas fa-cart-plus"></i>
                        </button>
                    </div>
                    <p><i className="far fa-clock me-1"></i> Delivery Time : {product && product.estimatedDeliveryTime}</p>
                </div>
            </div >
        </Link>
    )
}

export default ProductCard
