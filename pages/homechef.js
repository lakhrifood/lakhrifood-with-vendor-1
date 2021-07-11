import React from 'react'
import HomechefCard from '../components/HomechefCard';
import HomechefDetails from '../components/HomechefDetails';
import Layout from './../components/Layout';
import Navbar from './../components/Navbar';
import JoinAsVendorOrRider from './../components/JoinAsVendorOrRider';
import Footer from './../components/Footer/Footer';

function homechef() {
    return (
        <Layout>
            <Navbar />
            <HomechefDetails />
            <JoinAsVendorOrRider />
            <Footer />
        </Layout>
    )
}

export default homechef
