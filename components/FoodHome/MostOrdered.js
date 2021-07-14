import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAndSetPopularFoodAction } from "../../state/action/FoodActions";
import styles from "../../styles/Home.module.css";
import ProductCard from "../ProductCard";

const MostOrdered = () => {
  const dispatch = useDispatch();
  const { popularFoods } = useSelector(state => state.food);

  useEffect(() => {
    dispatch(getAndSetPopularFoodAction());
  }, []);

  return (
    <div className={styles.mostContainer}>
      <h1 className={styles.mostORderTitle}>
        Most <span className={styles.headingproClr}>Ordered</span>{" "}
      </h1>
      <div className={`${ styles.mostOrdered } d-flex flex-wrap justify-content-around`}>
        {popularFoods && popularFoods.map((food, index) => <ProductCard key={index} product={food} />)}
      </div>
    </div>
  );
};

export default MostOrdered;
