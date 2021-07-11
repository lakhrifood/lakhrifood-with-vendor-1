import Image from 'next/image'
import styles from '../styles/ProductCard.module.css';

function ProductCard() {
    return (
        <div className={`card ${ styles.productCard }`}>
            <Image
                src="/./pizza-beer-1200x628-facebook-1200x628.png"
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
                <div className="d-flex justify-content-between align-items-center">
                    <h3>120.00 BDT</h3>
                    <button className="btn btn-bg">
                        <i className="fas fa-cart-plus"></i>
                    </button>
                </div>
                <p><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</p>
            </div>
        </div>
    )
}

export default ProductCard
