import Head from "next/head";
import Image from "next/image";
import Catagories from "../components/FoodHome/Catagories";
import Cover from "../components/FoodHome/Cover";
import Promotion from "../components/FoodHome/Promotion";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lakhrifood </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cover />
      <Catagories />
      <Promotion />
    </div>
  );
}
