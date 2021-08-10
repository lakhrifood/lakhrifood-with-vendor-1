import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/ProductCard.module.css";
import { AddOrderCartAction } from "../state/action/OrderAction";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, reduceQuantity, removeOrder } from "../state/reducers/OrderSlice";
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.order);

  const { food } = useSelector((state) => state.food);
  const found = cartList.find((element) => element.productId === product._id);

  // for add to cart dispatches
  const add = (productId) => {
    dispatch(addQuantity({ id: productId }));
  };
  const minus = (productId) => {
    dispatch(reduceQuantity({ id: productId }));
  };
  const remove = (productId) => {
    dispatch(removeOrder({ id: productId }));
  };

  const addToCart = () => {
    dispatch(
      AddOrderCartAction({
        productId: product._id,
        productName: product.name,
        vendorID: product.vendorID,
        imgURL: product.imgURL,
        price: product.price,
        quantity: 1,
        discount: product.discountPrice ? product.discountPrice : 0,
      })
    );
  };

  useEffect(() => { }, []);
  return (
    <div className={`card ${ styles.productCard }`}>
      {product &&
        <>
          <Link
            href={`/product/${ product && product._id }`}
          >
            <Image
              src={
                (product && product.imgURL) ||
                "/./pizza-beer-1200x628-facebook-1200x628.png"
              }
              width="100%"
              height="200px"
              className={`card-img-top ${ styles.cardImage }`}
              alt="..."
            />
          </Link>
          <div className="card-body">
            <Link
              href={`/product/${ product && product._id }`}
            >
              <h5 className="pb-1"> {product && product.name}</h5>
            </Link>
            <h5>
              <span
                className={` fa fa-star ${ styles.starIcon } ${ Math.round(product && product.averageRating) >= 1 &&
                  styles.checked
                  }`}
              ></span>
              <span
                className={`fa fa-star ${ styles.starIcon } ${ Math.round(product && product.averageRating) >= 2 &&
                  styles.checked
                  }`}
              ></span>
              <span
                className={`fa fa-star ${ styles.starIcon } ${ Math.round(product && product.averageRating) >= 3 &&
                  styles.checked
                  }`}
              ></span>
              <span
                className={`fa fa-star ${ styles.starIcon } ${ Math.round(product && product.averageRating) >= 4 &&
                  styles.checked
                  }`}
              ></span>
              <span
                className={`me-2 fa fa-star ${ styles.starIcon } ${ Math.round(product && product.averageRating) >= 5 &&
                  styles.checked
                  }`}
              ></span>
              ({product && product.allRatings.length})
            </h5>
            <p>{product && product.description.slice(0, 60)}...</p>

            {product?.discountPrice ? (
              <>
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{product && product.price - product?.discountPrice}BDT </h3>
                </div>
                <div className="d-flex justify-content-between align-items-center ">
                  <del>{product && product.price} BDT</del>
                </div>
              </>
            ) : (
              <>
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{product && product.price} BDT</h3>
                </div>
              </>
            )}
            <div className="pt-2 pb-2 d-flex justify-content-between align-items-center">
              <div className={styles.quantity}>
                {found?.quantity >= 0 ? (
                  <>
                    {found?.quantity <= 1 ? (
                      <button
                        onClick={() => {
                          minus(product && product._id);
                        }}
                        disabled
                      >
                        -
                      </button>) : (
                      <button
                        onClick={() => {
                          minus(product && product._id);
                        }}
                      >
                        -
                      </button>)}
                    <h1>{found?.quantity}</h1>
                    <button
                      onClick={() => {
                        add(product && product._id);
                      }}
                    >
                      +
                    </button>
                  </>) : ("")}
              </div>

              {found?.quantity >= 1 ? (
                <button
                  className="btn btn-bg"
                  onClick={() => remove(product && product._id)}
                >
                  <i className={`  fas fa-times `}></i>
                </button>
              ) : (
                <button className="btn btn-bg" onClick={() => addToCart()}>
                  <i className={`  fas fa-cart-plus `}></i>
                </button>
              )}
            </div>

            {product && product.category === "Fast Food Item" ? (
              <p>
                <i className="far fa-clock me-1"></i> 6 hour pre order required
              </p>
            ) : (
              <p>
                <i className="far fa-clock me-1"></i> 12 hour pre order required
              </p>
            )}
          </div>
        </>
      }
    </div>
  );
}

export default ProductCard;
