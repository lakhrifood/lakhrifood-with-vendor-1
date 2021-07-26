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
      `http://localhost:5000/auth/user/${localStorage.getItem("userId")}`
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
        <div className={`${styles.container} container`}>
          <h1>My Profile</h1>
          <Image
            src="/../public/profile.png"
            alt="Picture of the author"
            width={150}
            height={150}
            className={styles.profilePic}
          />
          <p>{user && user.name}</p>
          <p>
            <span className={styles.containerspan}>Email:</span>
            {user && user.email}
          </p>
          <p>
            <span className={styles.containerspan}>Phone Number:</span>
            {user && user.phoneNumber}
          </p>
          <p>
            <span className={styles.containerspan}>Location:</span>
            {user && user.address}
          </p>
          <p>
            <span className={styles.containerspan}>Gender:</span>
            {user && user.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
