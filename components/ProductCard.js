import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/ProductCard.module.css";
import { AddOrderCartAction } from "../state/action/OrderAction";
import { useDispatch, useSelector } from "react-redux";
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.order);
  console.log(product, "see you");
  const { food } = useSelector((state) => state.food);
  const found = cartList.find((element) => element.productId === product._id);

  const addToCart = () => {
    dispatch(
      AddOrderCartAction({
        productId: food._id,
        productName: food.name,
        vendorID: food.vendorID,
        imgURL: food.imgURL,
        price: food.price,
        quantity: 1,
        discount: food.discountPrice ? food.discountPrice : 0,
      })
    );
  };

  useEffect(() => {}, []);
  return (
    <Link
      href={`/product/${product && product.name}?id=${product && product._id}`}
    >
      <div className={`card ${styles.productCard}`}>
        <Image
          src={
            (product && product.imgURL) ||
            "/./pizza-beer-1200x628-facebook-1200x628.png"
          }
          width="100%"
          height="280px"
          className={`card-img-top ${styles.cardImage}`}
          alt="..."
        />
        <div className="card-body">
          <h5> {product && product.name}</h5>
          <h5>
            <span
              className={`ms-2 fa fa-star ${styles.starIcon} ${
                Math.round(product && product.averageRating) >= 1 &&
                styles.checked
              }`}
            ></span>
            <span
              className={`fa fa-star ${styles.starIcon} ${
                Math.round(product && product.averageRating) >= 2 &&
                styles.checked
              }`}
            ></span>
            <span
              className={`fa fa-star ${styles.starIcon} ${
                Math.round(product && product.averageRating) >= 3 &&
                styles.checked
              }`}
            ></span>
            <span
              className={`fa fa-star ${styles.starIcon} ${
                Math.round(product && product.averageRating) >= 4 &&
                styles.checked
              }`}
            ></span>
            <span
              className={`me-2 fa fa-star ${styles.starIcon} ${
                Math.round(product && product.averageRating) >= 5 &&
                styles.checked
              }`}
            ></span>
            ({product && product.allRatings.length})
          </h5>
          <p>{product && product.description.slice(0, 60)}...</p>
          {product?.discountPrice ? (
            <>
              <div className="d-flex justify-content-between align-items-center ">
                <del>{product && product.price} BDT</del>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h3>{product && product.price - product?.discountPrice}BDT </h3>
                {found?.quantity <= 1 ? (
                  <button className="btn btn-bg" disabled onClick={addToCart}>
                    <i className={`  fas fa-cart-plus `}></i>
                  </button>
                ) : (
                  <button className="btn btn-bg" onClick={addToCart}>
                    <i className={`  fas fa-cart-plus `}></i>
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center">
                <h3>{product && product.price} BDT</h3>

                {found?.quantity <= 1 ? (
                  <button className="btn btn-bg" disabled onClick={addToCart}>
                    <i className={`  fas fa-cart-plus `}></i>
                  </button>
                ) : (
                  <button className="btn btn-bg" onClick={addToCart}>
                    <i className={`  fas fa-cart-plus `}></i>
                  </button>
                )}
              </div>
            </>
          )}

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
      </div>
    </Link>
  );
}

export default ProductCard;
