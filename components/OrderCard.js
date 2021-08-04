import Image from "next/image";
import styles from "../styles/OrderCard.module.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Link from "next/link";
function OrderCard({ order }) {
  console.log(order, "morder");
  let titalQue = 0;
  let totalPrice = 0;
  order.productInfo.map((product) => {
    totalPrice += product.price * product.quantity - product.discount;
    titalQue += product.quantity;
  });

  return (
    <Link href={`/ordertracking/${order._id}`}>
      <div className={`${styles.orderCard}`}>
        <h1 className={styles.orderID}>Order #{order._id}</h1>
        <p className={styles.orderTime}>{order.createdAt}</p>
        <div className={styles.bossContainer}>
          <div>
            <p>Total price: {totalPrice - order.globalDiscount}</p>
            <p>Total Product Quantity: {titalQue}</p>
          </div>
          <div className={styles.orderListImage}>
            {order.productInfo &&
              order.productInfo?.map((product, index) => (
                <div className="">
                  {product.productId ? (
                    <Image
                      className=""
                      src={product.productId && product.productId?.imgURL}
                      width={50}
                      height={50}
                    />
                  ) : null}

                  {/* <div className="ms-4">
                <h1 className={styles.productName}>
                  {product.productId?.name}
                </h1>
                <h1 className={styles.productPrice}>
                  {product.productId?.price} TK
                  <strong className="ms-5">Qty: </strong> {product.quantity}
                </h1>
              </div> */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default OrderCard;
