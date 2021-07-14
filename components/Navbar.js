import Image from "next/image"
import styles from '../styles/Navbar.module.css';
import Link from "next/link"

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-transparent ${ styles.navbarShadow }`}>
            <div className="container">
                <Image src="/./Lakhri food logo.svg" width={100} height={50} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav me-auto ms-auto mb-2 mb-lg-0 ${ styles.mainMenu } `}>
                        <Link href="/menu">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Menu</a>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Order</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vendor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Promotion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <button className={`btn ${ styles.btnSeller }`}>Login/Sign Up as a Seller</button>
                        </li>
                    </ul>

                    <div className="d-flex flex-w">
                        <ul className={`navbar-nav me-auto ms-auto mb-2 mb-lg-0 ${ styles.mainMenuIcon } `}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><i className="fas fa-cart-plus"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><i className="fas fa-user-circle"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
