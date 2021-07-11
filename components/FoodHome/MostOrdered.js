import { Flex } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Home.module.css";
import ProductCard from "../ProductCard";

const MostOrdered = () => {
  return (
    <div className={styles.mostContainer}>
      <h1 className={styles.mostORderTitle}>
        Most <span className={styles.headingproClr}>Ordered</span>{" "}
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

export default MostOrdered;
