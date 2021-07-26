import axios from 'axios';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/vendor/Navbar'
import { setAuthFalse, setAuthTrue } from '../../state/reducers/UserAuth';

function Waiting() {
    const router = useRouter();
    const [user, setuser] = useState({});
    const getUserProfile = async () => {
        const { data } = await axios.get(
            `http://localhost:5000/business/one/${ localStorage.getItem("vendorID") }`
        );
        console.log(data.status, "mycat");

        setuser(data);
    };

    // checking login vendor
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.userAuth.authenticated);

    const checkLogin = () => {
        const token = localStorage.getItem("vtoken");
        const getName = localStorage.getItem("vName");
        if (token) {
            dispatch(setAuthTrue());
        } else if (!token) {
            dispatch(setAuthFalse());
        }
    };

    useEffect(async () => {
        await checkLogin();
        { isAuthenticated === false && router.push("/vendor/signin") }
        await getUserProfile();
        { user.status === "true" && router.push("/vendor/dashboard") }
    }, []);
    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: "#f6f6f6", height: "100vh" }} className="d-flex justify-content-center align-items-center">
                <div style={{ backgroundColor: "#fff", padding: "100px 200px" }} className="d-flex flex-column justify-content-center align-items-center">
                    {/* <div className="d-flex flex-column justify-content-center align-items-center pt-4 pb-4"> */}
                    <Image
                        width={50}
                        height={50}
                        src="/./svg/loading.svg" />
                    <h1 className="p-3 text-center">
                        Once You accepted By Admin <br />
                        You can Access the Dashboard
                    </h1>
                    <div className="text-center fw-bold">Keep Patience!</div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Waiting
