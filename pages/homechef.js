import React from 'react'
import HomechefCard from '../components/HomechefCard';
import HomechefDetails from '../components/HomechefDetails';
import Layout from './../components/Layout';
import Navbar from './../components/Navbar';

function homechef() {
    return (
        <Layout>
            <Navbar />
            <HomechefDetails />
        </Layout>
    )
}

export default homechef
