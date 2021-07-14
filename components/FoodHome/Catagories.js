import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Catagories = () => {
  return (
    <div className={styles.cataContainer}>
      <h1>Categories</h1>
      <div className={styles.cataCon}>
        <div className={styles.Items}>
          <div className={styles.item}>
            <Image
              src="/../public/chef.png"
              alt="Picture of the author"
              width={90}
              height={110}
            />
            <h1>Home Chefs</h1>
          </div>
        </div>
        <div className={styles.Items}>
          <div className={styles.item}>
            <Image
              src="/../public/chef.png"
              alt="Picture of the author"
              width={90}
              height={110}
            />
            <h1>Home Chefs</h1>
          </div>
        </div>
        <div className={styles.Items}>
          <div className={styles.item}>
            <Image
              src="/../public/chef.png"
              alt="Picture of the author"
              width={90}
              height={110}
            />
            <h1>Home Chefs</h1>
          </div>
        </div>
        <div className={styles.Items}>
          <div className={styles.item}>
            <Image
              src="/../public/chef.png"
              alt="Picture of the author"
              width={90}
              height={110}
            />
            <h1>Home Chefs</h1>
          </div>
        </div>
        <div className={styles.Items}>
          <div className={styles.item}>
            <Image
              src="/../public/chef.png"
              alt="Picture of the author"
              width={90}
              height={110}
            />
            <h1>Home Chefs</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
