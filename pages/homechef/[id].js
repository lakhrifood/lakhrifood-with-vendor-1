import React from 'react'
import HomechefCard from '../../components/homechefcard';
import HomechefDetails from '../../components/homechefdetails';
import Layout from '../../components/Layout';
import Navbar from '../../components/navbar';
import JoinAsVendorOrRider from '../../components/joinasvendororrider';
import Footer from '../../components/Footer/footer';
import RecommendedHomeChef from '../../components/FoodHome/recommendedhomechef';
import RecommendedProduct from '../../components/FoodHome/recommendedproduct';
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
