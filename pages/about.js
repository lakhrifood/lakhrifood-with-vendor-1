import DeliveryInfo from '../components/About/DeliveryInfo';
import PrivacyPolicy from '../components/About/privacyPolicy';
import Navbar from '../components/Navbar';
import Footer from '../components/vendor/Footer/Footer';
import styles from '../styles/About.module.css';

function about() {
    return (
        <div>
            <Navbar />
            <div style={{ backgroundColor: "#f6f6f6" }}>
                <div className={styles.aboutHeader}>
                    <h1 className="fw-bold text-light fs-1">About Us</h1>
                    <p className="text-light fs-5">
                        Lakhri Foods Connects People to their Favorite Home Food Destination Ensuring Hygiene and Safe Delivery.We provide dishes from various Home-Chefs of the country under one roof. Introducing you to Mouth-Watering and Delectable Flavors.Best of all, when you use our service, 50% of the entire profit goes to feeding the homeless street kids!Satisfy your tummy while providing a meal to a hungry street kid at no extra cost!
                    </p>
                </div>
                <DeliveryInfo />
                <PrivacyPolicy />
                <div className={styles.aboutFooter}>
                    <h1 className="fw-bold text-light fs-1">Other Website</h1>
                    <p className="text-light fs-5">
                        Our website may have links to other websites. This privacy policy only applies to this website. You should therefore read the privacy policies of the other websites when you are using those sites.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default about
