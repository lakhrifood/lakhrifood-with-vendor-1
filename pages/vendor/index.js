import Layout from "../../components/Layout"
import SellerHeader from "../../components/vendor/SellerHeader";
import styles from './index.module.css';

function index() {
  return (
    <Layout>
      <SellerHeader></SellerHeader>
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-md-6">
            <h4 className={`${ styles.welcomeText } mb-5`}>Welcome to <br /> LAKHRI <span className="text-success" >Foods</span> </h4>

            <button className={`btn ${ styles.button } `}>Register As a Seller</button>
            <button className={`btn ${ styles.button } `}>Log In</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index

