import { Flex } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Home.module.css";
import ProductCard from "../ProductCard";
const RecommendedHomeChef = () => {
  return (
    <div className={styles.mostContainer}>
      <h1 className={styles.mostORderTitle}>
        Recommended <span className={styles.headingproClr}>HomeChef</span>{" "}
      </h1>
      <div className={styles.mostOrdered}>
        <Flex alignItems="center" justifyContent="center">
          <ProductCard />
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <ProductCard />
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <ProductCard />
        </Flex>
      </div>
    </div>
  );
};

export default RecommendedHomeChef;
