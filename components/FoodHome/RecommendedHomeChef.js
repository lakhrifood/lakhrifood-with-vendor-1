import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAndSetPopularHomechefsAction } from "../../state/action/HomechefAction";
import styles from "../../styles/Home.module.css";
import HomechefCard from './../HomechefCard';

const RecommendedHomeChef = () => {

  const dispatch = useDispatch();
  const { popularHomechef } = useSelector(state => state.homechef);

  useEffect(() => {
    dispatch(getAndSetPopularHomechefsAction());
  }, []);

  return (
    <div className={styles.mostContainer}>
      <h1 className={styles.mostORderTitle}>
        Recommended <span className={styles.headingproClr}>HomeChef</span>{" "}
      </h1>
      <div className={`${ styles.mostOrdered } d-flex flex-wrap justify-content-around`}>
        {popularHomechef && popularHomechef.map((homechef, index) => <HomechefCard key={index} business={homechef} />)}
      </div>
    </div>
  );
};

export default RecommendedHomeChef;
