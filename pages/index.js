import Head from "next/head";
import Image from "next/image";
import Catagories from "../components/FoodHome/catagories";
import Cover from "../components/FoodHome/cover";
import Promotion from "../components/FoodHome/promotion";
import styles from "../styles/Home.module.css";
import MostOrdered from "../components/FoodHome/mostordered";
import RecommendedHomeChef from "../components/FoodHome/recommendedhomechef";
import RecommendedProduct from "../components/FoodHome/recommendedproduct";

import Footer from "../components/Footer/footer";
import Navbar from "../components/navbar";
import JoinAsVendorOrRider from "../components/joinasvendororrider";
import Questions from "../components/FoodHome/questions";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lakhrifood </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container">
        <Cover />
        <Catagories />
        <Promotion />
        <MostOrdered />
        <RecommendedHomeChef />
        <RecommendedProduct />
        <Questions />
      </div>
      <JoinAsVendorOrRider />
      <Footer />
    </div>
  );
}
