import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import Navbar from '../../components/vendor/Navbar';
import Footer from '../../components/vendor/Footer/Footer';
import { useRouter } from "next/router";
import axios from "axios";
import { setAuthFalse, setAuthTrue } from "../../state/reducers/UserAuth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Orderhistory = () => {

  // checking vendor status
  const router = useRouter();
  const [user, setuser] = useState({});
  const getUserProfile = async () => {
    const { data } = await axios.get(
      `https://peaceful-citadel-48843.herokuapp.com/business/one/${ localStorage.getItem("vendorID") }`
    );
    setuser(data);
  };

  // checking vendor login
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.userAuth.authenticated);
  const checkLogin = () => {
    const token = localStorage.getItem("vtoken");
    const getName = localStorage.getItem("vName");
    if (token) {
      dispatch(setAuthTrue());
    } else {
      dispatch(setAuthFalse());
    }
  };

  console.log(user.status, isAuthenticated, "asdfasdfasdf")

  useEffect(async () => {
    await getUserProfile();
    await checkLogin();
    // { user.status === "false" || "rejected" && router.push("/vendor/waiting"); }
    // { !isAuthenticated && router.push("/vendor/signin"); }
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className=" backgroundAsh">
        <div className="container pt-40 container100vh">
          <h1 className={`h3 ml-10 `}>Order history</h1>
          <Table variant="simple" bg="white">
            <Thead>
              <Tr>
                <Th>Tracking No</Th>
                <Th>Date</Th>
                <Th>Qty</Th>
                <Th> Payment Status</Th>
                <Th> Delivery Status</Th>
                <Th> Details</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
            </Tfoot>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orderhistory;
