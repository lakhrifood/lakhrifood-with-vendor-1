import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";
import { setAuthTrue, setAuthFalse } from "../state/reducers/UserAuth";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import router from "next/router";
function Navbar() {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const isAuthenticated = useSelector((state) => state.userAuth.authenticated);
  const cartList = useSelector((state) => state.order);

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    const getName = localStorage.getItem("userName");
    setname(getName);
    if (token) {
      dispatch(setAuthTrue());
    } else {
      dispatch(setAuthFalse());
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    dispatch(setAuthFalse());
    router.push("/");
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-transparent ${ styles.navbarShadow }`}
    >
      <div className="container">
        <Image priority={true} src="/./Lakhri food logo.svg" width={100} height={50} alt="" />
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
            className={`navbar-nav me-auto ms-auto mb-2 mb-lg-0 ${ styles.mainMenu } `}
          >
            <Link href="/menu">
              <li className="nav-item">
                <a
                  className={`${ styles.navlinkFont } nav-link`}
                  aria-current="page"
                  href="#"
                >
                  Menu
                </a>
              </li>
            </Link>
            <Link href={isAuthenticated ? "/orders" : "/auth/signin"}>
              <li className="nav-item">
                <a className={`${ styles.navlinkFont } nav-link`} href="#">
                  Order
                </a>
              </li>
            </Link>
            <Link href="/homechefs">
              <li className="nav-item">
                <a className={`${ styles.navlinkFont } nav-link`} href="#">
                  Our Homechefs
                </a>
              </li>
            </Link>

            <li className="nav-item">
              <a className={`${ styles.navlinkFont } nav-link`} href="#">
                Promotion
              </a>
            </li>
            <Link href={isAuthenticated ? "/support" : "/auth/signin"}>
              <li className="nav-item">
                <a className={`${ styles.navlinkFont } nav-link`} href="#">
                  Contact Us
                </a>
              </li>
            </Link>
          </ul>

          <div className="d-flex flex-w">
            <ul
              className={`navbar-nav me-auto ms-auto mb-2 mb-lg-0 ${ styles.mainMenuIcon } `}
            >
              <li className={`${ styles.userSection }`}>
                <Link href="/checkout">
                  <i className={`${ styles.logoUser } fas fa-cart-plus `}></i>
                </Link>
                <p className={styles.numberProduct}>{cartList.length}</p>
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <>
                    {/* <li className={` ${ styles.userSection }`}>
                      <i className={`fas ${ styles.logoUser } fa-user-circle`}> </i>
                      <p className={styles.Email}>{name}</p>
                    </li> */}
                    <div div className="dropdown">
                      <a
                        className="btn btn-light dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {name}
                      </a>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link href="/profile">
                            <a className="dropdown-item" href="#">
                              Profile
                            </a>
                          </Link>
                        </li>
                        <li onClick={() => handleLogOut()}>
                          <a className="dropdown-item" href="#">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link href="/auth/signin">
                    <a className={`btn ${ styles.btnSeller }`}>Login/Sign Up</a>
                  </Link>
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
