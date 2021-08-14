import React, { useEffect } from "react";
import Products from "../components/FoodMenu/Products";
import SideBar from "../components/FoodMenu/SideBar";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import styles from "../styles/Menu.module.css";
import JoinAsVendorOrRider from "../components/JoinAsVendorOrRider";
import Footer from "../components/vendor/Footer/Footer";
import { getAndSetFoodAction } from "../state/action/FoodActions";
import { useDispatch } from "react-redux";
import { getAndSetHomechefsAction } from "../state/action/HomechefAction";
import { useRouter } from "next/router";
import Catagories from "../components/FoodHome/Catagories";
import Promotion from "../components/FoodHome/Promotion";

function Menu() {
  const router = useRouter();
  const id = router.asPath.split("id=")[1];
  return (
    <Layout>
      <Navbar></Navbar>
      <div className="container">
        {/* <Catagories />   */}
        <Promotion />
      </div>
      <div className={`container ${ styles.contentWrapper }`}>
        <SideBar></SideBar>

        <Products />
      </div>
      <JoinAsVendorOrRider />
      <Footer />
    </Layout>
  );
}

export default Menu;
