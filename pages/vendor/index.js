import Layout from "../../components/Layout"
import SellerHeader from "../../components/vendor/SellerHeader";
import styles from '../../styles/vendorIndex.module.css';
import Image from "next/image"

function index() {
  return (
    <Layout>
      <SellerHeader></SellerHeader>
      <div className="container-fluid">
        <div className="row p-5 flex-column-reverse flex-lg-row">
          <div className="col-md-6">
            <h4 className={`${ styles.welcomeText } mb-5`}>Welcome to <br /> LAKHRI <span className="text-success" >Foods</span> </h4>

            <button className={`btn ${ styles.button } `}>Register As a Seller</button>
            <button className={`btn ${ styles.button } `}>Log In</button>
          </div>
          <div className="col-md-6">
            <Image src="/./svg/landing.svg" alt="" width={1000} height={500} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index

