import styles from "../../styles/VendorProfile.module.css";
import Navbar from "../../components/vendor/Navbar";
import Footer from "../../components/vendor/Footer/Footer";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function Profile() {
  const router = useRouter();
  const [user, setuser] = useState({});
  const getUserProfile = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/business/one/${ localStorage.getItem("vendorID") }`
    );
    console.log(data, "mycat");
    setuser(data);
  };
  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#f6f6f6" }}>
        <div className="container pt-5 pb-5">
          <div className="d-flex flex-wrap justify-content-between">
            <h1 className={styles.title}> Manage Profile </h1>
            <Link href="/vendor/manageprofile"><button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className={`ms-3 btn ${ styles.addProductBtn }`}
            >
              Edit Profile
            </button></Link>
          </div>

          <div className="pt-5">
            <div className="text-center">
              <Image
                width={200}
                height={200}
                className={styles.profilePic}
                src={user && user.imgURL ? user.imgURL : '/./svg/user.svg'}
              />
              <h1 className={`mt-3`}>
                {user?.bio}
              </h1>
            </div>
            <h1 className={`mt-3 ${ styles.profileInfo }`}>
              Owner Name: {user?.ownerName}
            </h1>
            <h1 className={styles.profileInfo}>
              Name: {user?.organizationName}
            </h1>
            <h1 className={styles.profileInfo}>
              Location: {user?.organizationAddress}
            </h1>
            <h1 className={styles.profileInfo}>
              Description: {user?.description}
            </h1>
            <h1 className={styles.profileInfo}>
              Payment Method: {user?.paymentMethod}
            </h1>
            <h1 className={styles.profileInfo}>
              Payment Holder: {user?.paymentReceiver}
            </h1>
            <h1 className={styles.profileInfo}>
              Payment Details: {user?.paymentDetails}
            </h1>
            <h1 className={styles.profileInfo}>Email : {user?.email}</h1>
            <h1 className={styles.profileInfo}>Phone : {user?.phoneNumber}</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
