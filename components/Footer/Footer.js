
import FooterCol from '../FooterCol/FooterCol';
import styles from './Footer.module.css';

function Footer() {

    const noNamed = [
        { name: "", link: "" },
    ]

    const quickLink = [
        { name: "Menu", link: "#about" },
        { name: "Order", link: "#service" },
        { name: "Vendor", link: "#blog" },
        { name: "Promotion", link: "#contact" },
    ]

    const getInTouch = [

    ]

    return (
        <div>
            <footer className="footer-area bg-dark clear-both">
                <div className="container pt-5">
                    <div className="row py-5">
                        <FooterCol key={1} menuLogo={"/./Lakhri food logo.svg"} menuItems={noNamed} />
                        <FooterCol key={2} menuTitle="For Customer" menuItems={quickLink} />
                        <FooterCol key={3} menuTitle="Get In Touch" menuItems={getInTouch} >
                            <div className="col-md-6">
                                <p className={styles.contactDetails}>+0362747568688</p>
                                <p className={styles.contactDetails}>brainboxbd@gmail.com</p>
                                <p className={styles.contactDetails}>24,KemalAtaturkAve,Banani,Dhaka-1213</p>
                            </div>
                        </FooterCol>
                        <FooterCol key={3} menuTitle="Social Media" menuItems={getInTouch} >
                            <div className="col-md-6">
                                <p className={styles.contactDetails}></p>
                                <p className={styles.contactDetails}></p>
                                <p className={styles.contactDetails}></p>
                                <h3 className="text-light">We Accept for Payment</h3>
                            </div>
                        </FooterCol>

                    </div>
                    {/* <div className={styles.copyRight}>
                        <p>Terms of Use Privacy Policy {(new Date()).getFullYear()} All rights reserved by BRAINBOXBD</p>
                    </div> */}
                </div>
            </footer>
        </div>
    );
}

export default Footer;