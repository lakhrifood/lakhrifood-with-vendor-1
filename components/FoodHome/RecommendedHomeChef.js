import { Flex } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Home.module.css";
import ProductCard from "../ProductCard";
import HomechefCard from './../HomechefCard';
const RecommendedHomeChef = () => {
  return (
    <div className={styles.mostContainer}>
      <h1 className={styles.mostORderTitle}>
        Recommended <span className={styles.headingproClr}>HomeChef</span>{" "}
      </h1>
      <div className={styles.mostOrdered}>
        <Flex alignItems="center" justifyContent="center">
          <HomechefCard />
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <HomechefCard />
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <HomechefCard />
        </Flex>
      </div>
    </div>
  );
};

export default RecommendedHomeChef;
