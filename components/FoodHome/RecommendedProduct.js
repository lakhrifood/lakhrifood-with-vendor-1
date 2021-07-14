import { Flex } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAndSetPopularFoodAction } from "../../state/action/FoodActions";
import styles from "../../styles/Home.module.css";
import ProductCard from "../ProductCard";
const RecommendedProduct = () => {


  return (
    <div className={styles.mostContainer}>
      <h1 className={styles.mostORderTitle}>
        Recommended <span className={styles.headingproClr}>Product</span>{" "}
      </h1>
      <div className={`${ styles.mostOrdered } d-flex flex-wrap justify-content-around`}>

        <ProductCard />


        <ProductCard />

        <ProductCard />

      </div>
    </div>
  );
};

export default RecommendedProduct;
