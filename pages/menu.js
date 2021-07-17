import React, { useEffect } from 'react'
import Products from '../components/FoodMenu/products';
import SideBar from '../components/FoodMenu/sideBar';
import Navbar from '../components/navbar'
import Layout from '../components/Layout';
import styles from '../styles/Menu.module.css'
import JoinAsVendorOrRider from '../components/joinasvendororrider';
import Footer from '../components/Footer/footer';
import { getAndSetFoodAction } from '../state/action/FoodActions';
import { useDispatch } from 'react-redux';
import { getAndSetHomechefsAction } from '../state/action/HomechefAction';


function Menu() {
    return (
        <Layout>
            <Navbar></Navbar>
            <div className={`container ${ styles.contentWrapper }`}>
                <SideBar></SideBar>
                <Products />
            </div>
            <JoinAsVendorOrRider />
            <Footer />
        </Layout>
    )
}

export default Menu
