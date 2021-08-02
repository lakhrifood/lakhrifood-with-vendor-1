import Image from "next/image";
import styles from "../styles/OrderCard.module.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Link from "next/link";
function OrderCard({ order }) {
  console.log(order, "morder");
  return (
    <Link href={`/ordertracking/${ order._id }`}>
      <div className={`card ${ styles.orderCard }`}>
        <h1 className={styles.orderID}>Order #{order._id}</h1>
        <p className={styles.orderTime}>{order.createdAt}</p>
        {order.productInfo &&
          order.productInfo?.map((product, index) => (
            <div className="d-flex align-items-center mb-4">
              {product.productId ? (
                <Image
                  className="rounded-circle"
                  src={product.productId && product.productId?.imgURL}
                  width={50}
                  height={50}
                />
              ) : null}

              <div className="ms-4">
                <h1 className={styles.productName}>
                  {product.productId?.name}
                </h1>
                <h1 className={styles.productPrice}>
                  {product.productId?.price} TK
                  <strong className="ms-5">Qty: </strong> {product.quantity}{" "}
                </h1>
              </div>
            </div>
          ))}


        <div className="text-end">
          <span className={`btn ${ styles.status }`}>
            <CheckCircleOutlineIcon /> Confirmed
          </span>
        </div>

      </div>
    </Link>
  );
}

export default OrderCard;
