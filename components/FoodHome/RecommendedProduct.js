import { Flex } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAndSetRecommendedFoodAction } from "../../state/action/FoodActions";
import styles from "../../styles/Home.module.css";
import ProductCard from "../ProductCard";
const RecommendedProduct = () => {

  const dispatch = useDispatch();
  const { recommendedFoods } = useSelector(state => state.food);

  useEffect(() => {
    dispatch(getAndSetRecommendedFoodAction());
  }, []);

  return (
    <div className={styles.mostContainer}>
      <h1 className={styles.mostORderTitle}>
        Recommended <span className={styles.headingproClr}>Product</span>{" "}
      </h1>
      <div className={`${ styles.mostOrdered } d-flex flex-wrap justify-content-around`}>
        {recommendedFoods && recommendedFoods.map((food, index) => <ProductCard key={index} product={food} />)}
      </div>
    </div>
  );
};

export default RecommendedProduct;
