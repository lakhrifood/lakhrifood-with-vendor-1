import styles from "../styles/Profile.module.css";
import Navbar from "../components/navbar";
import Image from "next/image";

const profile = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>My Profile</h1>
        <Image
          src="/../public/profile.png"
          alt="Picture of the author"
          width={150}
          height={150}
          className={styles.profilePic}
        />
        <p>Rakib Islam</p>
        <p>
          <span className={styles.containerspan}>Phone Number:</span>+880
          1212080980
        </p>
        <p>
          <span className={styles.containerspan}>Location:</span>295/Jha/6
          Shikdar Real Estate, Rayerbajar, Dhaka 1209
        </p>
        <p>
          <span className={styles.containerspan}>Gender:</span>Male
        </p>
      </div>
    </div>
  );
};

export default profile;
