import React from 'react'
import HomechefCard from '../components/HomechefCard';
import HomechefDetails from '../components/HomechefDetails';
import Layout from './../components/Layout';
import Navbar from './../components/Navbar';
import JoinAsVendorOrRider from './../components/JoinAsVendorOrRider';
import Footer from './../components/Footer/Footer';
import RecommendedHomeChef from './../components/FoodHome/RecommendedHomeChef';
import RecommendedProduct from './../components/FoodHome/RecommendedProduct';

function homechef() {
    return (
        <Layout>
            <Navbar />
            <HomechefDetails />
            <div className="container pb-5">
                <RecommendedHomeChef />
                <RecommendedProduct />
            </div>
            <JoinAsVendorOrRider />
            <Footer />
        </Layout>
    )
}

export default homechef
