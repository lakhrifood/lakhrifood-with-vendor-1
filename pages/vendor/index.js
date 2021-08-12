import WhyJoinUs from "../../components/vendor/Home/WhyJoinUs"
import VSignUp from "../../components/vendor/Home/VSignUp"
import PUploadAndSetup from "../../components/vendor/Home/PUploadAndSetup"
import FoodAcceptAndStartCook from "../../components/vendor/Home/FoodAcceptAndStartCook"
import WrapAndDeliver from "../../components/vendor/Home/WrapAndDeliver"
import GetPayment from "../../components/vendor/Home/GetPayment"
import Navbar from "../../components/vendor/Navbar";
import Footer from "../../components/vendor/Footer/Footer";

export default function index() {
    return (
        <div>
            <Navbar />
            <WhyJoinUs />
            <VSignUp />
            <PUploadAndSetup />
            <FoodAcceptAndStartCook />
            <WrapAndDeliver />
            <GetPayment />
            <Footer />
        </div>
    )
}