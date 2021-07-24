import React, { useState } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar";
import Router from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Image from "next/image";
import styles from "../../styles/ProductDetails.module.css";
import JoinAsVendorOrRider from "../../components/joinasvendororrider";
import Footer from "../../components/vendor/Footer/footer";
import {
  addQuantity,
  reduceQuantity,
  removeOrder,
} from "../../state/reducers/OrderSlice";
import RecommendedProduct from "../../components/FoodHome/recommendedproduct";
import MostOrdered from "../../components/FoodHome/mostordered";
import RecommendedHomeChef from "../../components/FoodHome/recommendedhomechef";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAndSetFoodActionByID } from "../../state/action/FoodActions";
import { AddOrderCartAction } from "../../state/action/OrderAction";
function Productdetails() {
  const route = useRouter();
  const id = route.asPath.split("id=")[1];
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.order);
  const { food } = useSelector((state) => state.food);
  const add = () => {
    dispatch(addQuantity({ id: food._id }));
  };
  const minus = () => {
    dispatch(reduceQuantity({ id: food._id }));
  };

  const found = cartList.find((element) => element.productId === food._id);

  const addToCart = () => {
    console.log(food.vendorID, "food.vendorID._id");
    dispatch(
      AddOrderCartAction({
        productId: food._id,
        productName: food.name,
        vendorID: food.vendorID,
        price: food.price,
        quantity: 1,
        discount: 200,
      })
    );
  };

  useEffect(() => {
    dispatch(getAndSetFoodActionByID(id));
  }, [id]);
  return (
    <Layout>
      <Navbar />
      <div className="container pt-5 pb-5">
        {food && (
          <div className="row">
            <div className="col-md-6 pb-5">
              <Image
                src={food.imgURL}
                width={200}
                height={150}
                className="rounded"
                layout="responsive"
              />
            </div>
            <div className="col-md-6">
              <div className={styles.productDetailsWrapper}>
                <h1 className={styles.pTitle}>{food.name}</h1>
                <h5 className={styles.pReting}>
                  <span
                    className={`fa fa-star ${styles.starIcon}  ${
                      Math.round(food.averageRating) >= 1 && styles.checked
                    }`}
                  ></span>
                  <span
                    className={`fa fa-star ${styles.starIcon} ${
                      Math.round(food.averageRating) >= 2 && styles.checked
                    }`}
                  ></span>
                  <span
                    className={`fa fa-star ${styles.starIcon} ${
                      Math.round(food.averageRating) >= 3 && styles.checked
                    }`}
                  ></span>
                  <span
                    className={`fa fa-star ${styles.starIcon} ${
                      Math.round(food.averageRating) >= 4 && styles.checked
                    }`}
                  ></span>
                  <span
                    className={`fa fa-star ${styles.starIcon} ${
                      Math.round(food.averageRating) >= 5 && styles.checked
                    }`}
                  ></span>
                  ({food.allRatings.length})
                  <small>
                    <i className="far fa-clock ms-3 me-1"></i> Delivery Time :{" "}
                    {food.estimatedDeliveryTime}
                  </small>
                </h5>
                {/* <h6 className={styles.pAmountOfCalPro}>250 gm Cal | 40 gm Protein</h6> */}
                <h4 className={styles.subTitle}>Description</h4>
                <p className={styles.pDetails}>{food.description}</p>
                <div className={styles.priceAndQuantityWrapper}>
                  <h4 className={styles.pPrice}>{food.price} BDT</h4>
                  {found ? (
                    <div className={styles.quantityWrapper}>
                      {found?.quantity <= 1 ? (
                        <input
                          type="submit"
                          className={styles.decrement}
                          value="-"
                          disabled
                        />
                      ) : (
                        <input
                          type="submit"
                          className={styles.decrement}
                          value="-"
                          onClick={() => {
                            minus();
                          }}
                        />
                      )}

                      <input
                        type="number"
                        value={found.quantity}
                        name=""
                        id=""
                      />
                      <input
                        type="submit"
                        className={styles.increment}
                        value="+"
                        onClick={() => {
                          add();
                        }}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {found ? (
                  <button
                    className={`btn btn-bg ${styles.addCartBtn}`}
                    disabled
                  >
                    added to cart
                  </button>
                ) : (
                  <button
                    className={`btn btn-bg ${styles.addCartBtn}`}
                    onClick={() => {
                      addToCart();
                    }}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        <MostOrdered />
        <RecommendedHomeChef />
      </div>
      <JoinAsVendorOrRider />
      <Footer />
    </Layout>
  );
}

export default Productdetails;
