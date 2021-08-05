import styles from "../styles/Profile.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Profile = () => {
  const isAuthenticated = useSelector((state) => state.userAuth.authenticated);
  const router = useRouter();
  const [user, setuser] = useState({});
  const checkLogin = async () => {
    if (isAuthenticated == false) {
      router.push("/login");
    }
  };
  const getUserProfile = async () => {
    const { data } = await axios.get(
      `https://peaceful-citadel-48843.herokuapp.com/auth/user/${ localStorage.getItem("userId") }`
    );
    console.log(data, "mycat");
    setuser(data);
  };
  useEffect(() => {
    checkLogin();
    getUserProfile();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="page-bg">
        <div className={`${ styles.container } container pt-5 pb-5`}>
          <div className="row">
            <div className="col-md-8">

              <p className={styles.userName}>{user && user.name}</p>
              <p className={styles.userAddress}> <i className="fas fa-map-marker-alt me-2"></i> {user && user.address}</p>

              <h1 className={`${ styles.infoHeader }`}>CONTACT INFORMATION</h1>

              <p>
                <span className={styles.containerspan}>Phone:</span>
                {user && user.phoneNumber}
              </p>
              <p>
                <span className={styles.containerspan}>Email:</span>
                {user && user.email}
              </p>
              <p>
                <span className={styles.containerspan}>City:</span>
                {user && user.city}
              </p>

              <h1 className={`${ styles.infoHeader }`}>BASIC INFORMATION</h1>
              <p>
                <span className={styles.containerspan}>Gender:</span>
                {user && user.gender}
              </p>
            </div>
            <div className="col-md-4">
              <Image
                src={user && user.imgURL || "https://res.cloudinary.com/lakhrifood/image/upload/v1628139349/assests/user_ocaisw.svg"}
                alt="Picture of the author"
                width={150}
                height={150}
                className={styles.profilePic}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
