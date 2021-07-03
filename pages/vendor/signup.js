import styles from "../../styles/signup.module.css";
import Image from "next/image";
import seling from "../../public/svg/reg celing.svg";
import treeTub from "../../public/svg/reg tob.svg";
const signup = () => {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.header}>
        <div>Lakhrifood logo</div>
        <div className={styles.celingImagehContainer}>
          <div className={styles.celingSection1}>
            <Image
              src={seling}
              alt="signup lakhri celing"
              width={250}
              height={250}
            />
          </div>
          <div className={styles.celingSection2}>
            <Image
              src={seling}
              alt="signup lakhri celing"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.tabSection}>
          {" "}
          <Image
            src={treeTub}
            alt="signup lakhri celing"
            width={250}
            height={250}
          />
        </div>
        <div>form </div>
        <div>Lady </div>
      </div>
    </div>
  );
};

export default signup;
