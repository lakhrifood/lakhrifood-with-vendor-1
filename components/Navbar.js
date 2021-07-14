import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";
import { setAuthTrue, setAuthFalse } from "../state/reducers/UserAuth";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
function Navbar() {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const isAuthenticated = useSelector((state) => state.userAuth.authenticated);
  const cartList = useSelector((state) => state.order);

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    const getEmail = localStorage.getItem("userEmail");
    setemail(getEmail);
    if (token) {
      dispatch(setAuthTrue());
    } else {
      dispatch(setAuthFalse());
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-transparent ${styles.navbarShadow}`}
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
          <ul
            className={`navbar-nav me-auto ms-auto mb-2 mb-lg-0 ${styles.mainMenu} `}
          >
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Vendor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Promotion
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="d-flex flex-w">
            <ul
              className={`navbar-nav me-auto ms-auto mb-2 mb-lg-0 ${styles.mainMenuIcon} `}
            >
              <li className={`${styles.userSection}`}>
                <Link href="/checkout">
                  <i className={`${styles.logoUser} fas fa-cart-plus `}></i>
                </Link>
                <p className={styles.numberProduct}>{cartList.length}</p>
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <li className={` ${styles.userSection}`}>
                    <i className={`fas ${styles.logoUser} fa-user-circle`}> </i>

                    <p className={styles.Email}>{email}</p>
                  </li>
                ) : (
                  <button className={`btn ${styles.btnSeller}`}>
                    Login/Sign Up as{" "}
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
