import React from 'react'
import Products from '../components/FoodMenu/Products';
import SideBar from '../components/FoodMenu/SideBar';
import Navbar from '../components/Navbar'
import Layout from './../components/Layout';
import styles from '../styles/Menu.module.css'
import JoinAsVendorOrRider from '../components/JoinAsVendorOrRider';
import Footer from '../components/Footer/Footer';

function menu() {
    return (
        <Layout>
            <Navbar></Navbar>
            <div className={`container ${ styles.contentWrapper }`}>
                <SideBar></SideBar>
                <Products />
            </div>
            <JoinAsVendorOrRider/>
            <Footer/>
        </Layout>
    )
}

export default menu
