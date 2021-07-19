import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Navbar.module.css";

function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-transparent bg-transparent ${ styles.forVendorManu }`}>
            <div className="container">
                <Image src="/./Lakhri food logo.svg" width={100} height={50} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav ms-auto me-auto mb-2 mb-lg-0 ${ styles.mainMenu } ${ styles.forVendor } `}>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Food Section</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Order History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        {/* drop down start */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Settings
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Shop Settings</a></li>
                                <li><a className="dropdown-item" href="#">Money Withdraws</a></li>
                                <li><a className="dropdown-item" href="#">Contact Support</a></li>
                                <li><a className="dropdown-item" href="#">Manage Profile</a></li>
                            </ul>
                        </li>
                        {/* drop down end */}
                    </ul >
                </div >
                <div className="ms-auto">
                    <i className={`fas ${ styles.logoUser } fa-user-circle`}> </i>
                </div>
            </div >
        </nav >
    )
}

export default Navbar
