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
  console.log(item);
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
      {/* <Image
        src="/../public/biriyani.png"
        alt="Picture of the author"
        width={90}
        height={90}
      /> */}
      <div className={styles.detItemSection}>
        <h1>{item.productName}</h1>
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
