import styles from "../../styles/Home.module.css";
import Image from "next/image";

import Link from "next/link";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Catagories = () => {
  return (
    <div className={styles.cataContainer}>
      <h1 className="text-color">Categories</h1>

      <div className={`${ styles.categoryWrapper } container pb-3`}>

        <div className={styles.cataCon}>
          <div className={styles.Items}>
            <Link href="/menu?category=Cooked Meals">
              <div className={styles.item}>
                <Image
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139276/assests/Group_1490_hcjcrn.svg"
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
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139275/assests/turkey_rcgtw1.svg"
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
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139276/assests/frozen-yogurt_1_skqonn.svg"
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
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139274/assests/cake_f3igvv.svg"
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
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139274/assests/organic_ig7zry.svg"
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
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139274/assests/Fill_Outline_dh0uzo.svg"
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
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139273/assests/waiter_r9l6x3.svg"
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
