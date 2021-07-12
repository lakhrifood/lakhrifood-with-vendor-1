import Image from 'next/image';
import styles from '../styles/OrderCard.module.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function OrderCard() {
    return (
        <div className={`card ${ styles.orderCard }`}>
            <h1 className={styles.orderID}>Order #adfasdf</h1>
            <p className={styles.orderTime}>15 Jul 2021 10 : 00 am</p>
            <div className="d-flex align-items-center mb-4">
                <Image
                    className="rounded-circle"
                    src="/./pizza-beer-1200x628-facebook-1200x628.png"
                    width={100}
                    height={100}
                />
                <div className="ms-4">
                    <h1 className={styles.productName}>Pizza</h1>
                    <h1 className={styles.productPrice}>320 TK <strong className="ms-5">Qty: </strong> 2 </h1>
                </div>
            </div>
            <div className="d-flex align-items-center mb-4">
                <Image
                    className="rounded-circle"
                    src="/./pizza-beer-1200x628-facebook-1200x628.png"
                    width={100}
                    height={100}
                />
                <div className="ms-4">
                    <h1 className={styles.productName}>Pizza</h1>
                    <h1 className={styles.productPrice}>320 TK <strong className="ms-5">Qty: </strong> 2 </h1>
                </div>
            </div>
            <div className="text-end">
                <span className={`btn ${ styles.status }`}>
                    <CheckCircleOutlineIcon /> Confirmed
                </span>
            </div>
        </div>
    )
}

export default OrderCard
