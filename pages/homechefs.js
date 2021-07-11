import React from 'react'
import Footer from '../components/Footer/Footer';
import HomechefCard from '../components/HomechefCard';
import JoinAsVendorOrRider from '../components/JoinAsVendorOrRider';
import Navbar from '../components/Navbar';
import Layout from './../components/Layout';
import styles from '../styles/HomeChefList.module.css';
import MostOrdered from './../components/FoodHome/MostOrdered';
import RecommendedHomeChef from './../components/FoodHome/RecommendedHomeChef';

function homechefs() {
    return (
        <Layout>
            <Navbar />
            <div className="container pt-5 pb-5">
                <h1 className={styles.Title}>Our <span className={styles.headingproClr}>HomeChefs</span></h1>
                <div className="d-flex flex-wrap justify-content-around">
                    <HomechefCard />
                    {/* Another one */}
                    <HomechefCard />
                    {/* Another one */}
                    <HomechefCard />
                    {/* Another one */}
                    <HomechefCard />
                    {/* Another one */}
                    <HomechefCard />
                    {/* Another one */}
                    <HomechefCard />
                    {/* Another one */}
                    <HomechefCard />
                    {/* Another one */}
                    <HomechefCard />
                    {/* Another one */}
                    <HomechefCard />
                    {/* Another one */}
                </div>
                <MostOrdered />
                <RecommendedHomeChef />
            </div>
            <JoinAsVendorOrRider />
            <Footer />
        </Layout>
    )
}

export default homechefs
