import React, { useState } from "react";
import Footer from "../components/vendor/Footer/footer";
import HomechefCard from "../components/homechefcard";
import JoinAsVendorOrRider from "../components/joinasvendororrider";
import Navbar from "../components/navbar";
import Layout from "./../components/Layout";
import styles from "../styles/HomeChefList.module.css";
import MostOrdered from "./../components/FoodHome/mostordered";
import RecommendedHomeChef from "./../components/FoodHome/recommendedhomechef";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAndSetAllHomechefsAction } from "../state/action/HomechefAction";
import Pagination from "../components/pegination";

function Homechefs() {
  const dispatch = useDispatch();
  const { homechefs } = useSelector((state) => state.homechef);

  // code of pagination start
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  // code of pagination end

  useEffect(async () => {
    await dispatch(getAndSetAllHomechefsAction(pageNumber));
    setNumberOfPages(homechefs.totalPages);
  }, [homechefs, pageNumber]);
  return (
    <Layout>
      <Navbar />
      <div className="container pt-5 pb-5">
        <h1 className={styles.Title}>
          Our <span className={styles.headingproClr}>HomeChefs</span>
        </h1>
        <div className="d-flex flex-wrap justify-content-around">
          {homechefs.Business &&
            homechefs.Business.map((business, index) => (
              <HomechefCard key={index} business={business} />
            ))}
        </div>
        <div className="text-center">
          {numberOfPages > 1 && (
            <Pagination
              setPageNumber={setPageNumber}
              numberOfPages={numberOfPages}
              pageNumber={pageNumber}
            />
          )}
        </div>
        <MostOrdered />
        <RecommendedHomeChef />
      </div>
      <JoinAsVendorOrRider />
      <Footer />
    </Layout>
  );
}

export default Homechefs;
