import hero from "../../public/svg/hero.svg";
import waiting from "../../public/svg/waiting.svg";
import styles from "../../styles/welcome.module.css";
import Image from "next/image";

const welcome = () => {
  return (
    <div className={styles.mainScreen}>
      <div className={styles.head}>
        <Image src={hero} alt="Welcome men women" width={1350} height={300} />
      </div>
      <div className={styles.body}>
        <div className={styles.first}>
          <Image
            src={waiting}
            alt="Welcome men women"
            width={700}
            height={410}
          />
        </div>
        <div className={styles.second}>
          <h1>Hello Mr Rakib</h1>
          <p>Please wait a while till our people woild make a stall for you</p>
        </div>
      </div>
    </div>
  );
};

export default welcome;
