import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Catagories = () => {
  return (
    <div className={styles.cataContainer}>
      <h1>Categories</h1>

      <div className={`${ styles.categoryWrapper } container pb-3`}>
        <div className={`${ styles.cataCon }`}>

          <div className={styles.Items}>
            <Link href="/homechefs">
              <div className={styles.item}>
                <Image
                  src="/../public/chef.png"
                  alt="Picture of the author"
                  width={90}
                  height={110}
                />
                <h1>Home Chef's</h1>
              </div>
            </Link>
          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Cooked Meals">
              <div className={styles.item}>
                <Image
                  src="/../public/chef.png"
                  alt="Picture of the author"
                  width={90}
                  height={110}
                />
                <h1>Cooked Meals</h1>
              </div>
            </Link>
          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Frozen Food Item">
              <div className={styles.item}>
                <Image
                  src="/../public/chef.png"
                  alt="Picture of the author"
                  width={90}
                  height={110}
                />
                <h1>Frozen Food Item</h1>
              </div>
            </Link>

          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Desserts Item">
              <div className={styles.item}>
                <Image
                  src="/../public/chef.png"
                  alt="Picture of the author"
                  width={90}
                  height={110}
                />
                <h1>Desserts Item</h1>
              </div>
            </Link>

          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Organic Product">
              <div className={styles.item}>
                <Image
                  src="/../public/chef.png"
                  alt="Picture of the author"
                  width={90}
                  height={110}
                />
                <h1>Organic Product</h1>
              </div>
            </Link>
          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Fast Food Item">
              <div className={styles.item}>
                <Image
                  src="/../public/chef.png"
                  alt="Picture of the author"
                  width={90}
                  height={110}
                />
                <h1>Fast Food Item</h1>
              </div>
            </Link>
          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Catering Service">
              <div className={styles.item}>
                <Image
                  src="/../public/chef.png"
                  alt="Picture of the author"
                  width={90}
                  height={110}
                />
                <h1>Catering Service</h1>
              </div>
            </Link>
          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Office Meals">
              <div className={styles.item}>
                <Image
                  src="/../public/chef.png"
                  alt="Picture of the author"
                  width={90}
                  height={110}
                />
                <h1>Office Meals</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
