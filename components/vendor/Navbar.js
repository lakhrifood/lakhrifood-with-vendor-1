import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthFalse, setAuthTrue } from "../../state/reducers/UserAuth";

import styles from "../../styles/Navbar.module.css";

function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.userAuth.authenticated);

  // checking vendor status

  const [user, setuser] = useState({});
  const getUserProfile = async () => {
    const { data } = await axios.get(
      `https://peaceful-citadel-48843.herokuapp.com/business/one/${localStorage.getItem("vendorID")}`
    );
    console.log(data.status, router, "mycat");
    if (data.status === "false") {
      router.push("/vendor/waiting");
    }
    setuser(data);
  };

  const checkLogin = () => {
    const token = localStorage.getItem("vtoken");
    const getName = localStorage.getItem("vName");
    if (token) {
      dispatch(setAuthTrue());
    } else {
      dispatch(setAuthFalse());
      router.push("/vendor/signin");
    }
  };

  useEffect(async () => {
    await checkLogin();
    await getUserProfile();
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-transparent ${styles.forVendorManu}`}
    >
      <div className="container">
        <Image src="/./Lakhri food logo.svg" width={100} height={50} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {user && user.status === "true" && (
            <ul
              className={`navbar-nav ms-auto me-auto mb-2 mb-lg-0 ${styles.mainMenu} ${styles.forVendor} `}
            >
              <Link href="/vendor/dashboard">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Dashboard
                  </a>
                </li>
              </Link>
              <Link href="/vendor/orderhistory">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Order History
                  </a>
                </li>
              </Link>
              <Link href="/vendor/products">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Products
                  </a>
                </li>
              </Link>
              {/* drop down start */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Settings
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link href="/vendor/moneywithdraw">
                    <li>
                      <a className="dropdown-item" href="#">
                        Money Withdraws
                      </a>
                    </li>
                  </Link>
                  <Link href="/vendor/support">
                    <li>
                      <a className="dropdown-item" href="#">
                        Contact Support
                      </a>
                    </li>
                  </Link>
                  <Link href="/vendor/manageprofile">
                    <li>
                      <a className="dropdown-item" href="#">
                        Manage Profile
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>
              {/* drop down end */}
            </ul>
          )}

          <div className="ms-auto">
            <i className={`fas ${styles.logoUser} fa-user-circle`}> </i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
