import styles from "../../styles/VendorProfile.module.css";
import Navbar from "../../components/vendor/Navbar";
import Footer from "../../components/vendor/Footer/Footer";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
function profile() {
  const [user, setuser] = useState({});
  const getUserProfile = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/business/one/${localStorage.getItem("vendorID")}`
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
            <h1 className={styles.title}> Manage Profile</h1>
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className={`ms-3 btn ${styles.addProductBtn}`}
            >
              Edit Profile
            </button>
          </div>

          <div className="pt-5">
            <Image
              width={200}
              height={200}
              className={styles.profilePic}
              src="https://images.unsplash.com/photo-1606762988363-d039207ed63a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=931&q=80"
            />
            <h1 className={`mt-3 ${styles.profileInfo}`}>
              Vendor Owner Name :{user?.ownerName}
            </h1>
            <h1 className={styles.profileInfo}>
              Vendor Name : {user?.organizationName}
            </h1>
            <h1 className={styles.profileInfo}>
              Vendor Location : {user?.organizationAddress}
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

export default profile;
