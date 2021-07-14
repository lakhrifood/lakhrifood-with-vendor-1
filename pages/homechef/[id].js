import React from 'react'
import HomechefCard from '../../components/HomechefCard';
import HomechefDetails from '../../components/HomechefDetails';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import JoinAsVendorOrRider from '../../components/JoinAsVendorOrRider';
import Footer from '../../components/Footer/Footer';
import RecommendedHomeChef from '../../components/FoodHome/RecommendedHomeChef';
import RecommendedProduct from '../../components/FoodHome/RecommendedProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAndSetHomechefAction } from '../../state/action/HomechefAction';
import { useRouter } from 'next/dist/client/router';

function Homechef() {

    const route = useRouter();
    const id = (route.asPath.split('id=')[1]);

    const dispatch = useDispatch();
    const { homechef } = useSelector(state => state.homechef);

    useEffect(() => {
        dispatch(getAndSetHomechefAction(id));
    }, [id]);

    return (
        <Layout>
            <Navbar />
            {homechef && <HomechefDetails homechef={homechef} />}
            <div className="container pb-5">
                <RecommendedHomeChef />
                <RecommendedProduct />
            </div>
            <JoinAsVendorOrRider />
            <Footer />
        </Layout>
    )
}

export default Homechef
