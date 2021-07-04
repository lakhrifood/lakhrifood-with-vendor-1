import Layout from "../../components/Layout";
import Navbar from "../../components/vendor/Navbar";
import Image from "next/image";
import hero from "../../public/svg/hero.svg";
import styles from "../../styles/vendor.home.module.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  chakra,
  useTab,
  useStyles,
  Box,
} from "@chakra-ui/react";
import React from "react";
import OrderCard from "../../components/vendor/OrderCard";
const hime = () => {
  return (
    <Layout>
      <Navbar />
      <div className={styles.mainScreen}>
        <div className={styles.head}>
          <Image src={hero} alt="Welcome men women" width={1350} height={300} />
        </div>
        {/* isFitted */}
        <Tabs isFitted colorScheme="purple">
          <TabList>
            <Tab>New Request</Tab>
            <Tab>Accepted</Tab>
            <Tab>On Processing</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <OrderCard status="request" />
              <OrderCard status="request" />
              <OrderCard status="request" />
              <OrderCard status="request" />
            </TabPanel>
            <TabPanel>
              <OrderCard status="accepted" />
              <OrderCard status="accepted" />
              <OrderCard status="accepted" />
            </TabPanel>
            <TabPanel>asdasd</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </Layout>
  );
};

export default hime;
