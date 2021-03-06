import styles from "../../styles/Checkout.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  addQuantity,
  reduceQuantity,
  removeOrder,
} from "../../state/reducers/OrderSlice";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item, "pikachu");
  const add = () => {
    dispatch(addQuantity({ id: item.productId }));
  };
  const minus = () => {
    dispatch(reduceQuantity({ id: item.productId }));
  };
  const remove = () => {
    dispatch(removeOrder({ id: item.productId }));
  };
  console.log(item, "iasndlajns");
  return (
    <div className={styles.itemContainer}>
      {item.imgURL && (
        <Image
          src={item.imgURL}
          alt="Picture of the author"
          width={90}
          height={90}
        />
      )}
      <div className={styles.detItemSection}>
        <h1>{item.productName}</h1>
        <p className={styles.from}>From</p>
        <p>{item?.vendorID?.organizationName}</p>
      </div>
      <div className={styles.quantity}>
        {item.quantity <= 1 ? (
          <button
            className={`btn`}
            onClick={() => {
              minus();
            }}
            disabled
          >
            -
          </button>
        ) : (
          <button
            className={`btn`}
            onClick={() => {
              minus();
            }}
          >
            -
          </button>
        )}

        <h1>{item.quantity}</h1>
        <button
          className={`btn`}
          onClick={() => {
            add();
          }}
        >
          +
        </button>
      </div>
      <p className={styles.aroundPrice}>{item.price} BDT</p>
      <i
        className={`fas fa-times ${styles.iconx}`}
        onClick={() => {
          remove();
        }}
      ></i>
    </div>
  );
};

export default CartItem;
