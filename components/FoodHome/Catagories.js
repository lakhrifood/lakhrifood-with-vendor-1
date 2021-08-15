import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Catagories = () => {

  // const scrollCategoriesNext = () => {
  //   document.getElementById("categories").scrollBy(100, 0);
  // }
  // const scrollCategoriesPrev = () => {

  // }
  function scrollCategoriesPrev() {
    document.getElementById("categories").scrollBy(-193, -0);
  }
  function scrollCategoriesNext() {
    document.getElementById("categories").scrollBy(193, 0);
  }
  return (
    <div className={styles.cataContainer}>
      <h1 className="text-color pb-3">Categories</h1>

      <div className={`${ styles.categoryWrapper } container px-5 pb-3`}>
        <button onClick={() => scrollCategoriesPrev()} className={`btn me-4 ${ styles.scrollBtn }`}><i className="fas fa-chevron-left"></i></button>
        <div id="categories" className={styles.cataCon}>
          <div className={styles.Items}>
            <Link href="/menu?category=Cooked Meals">
              <div className={styles.item}>
                <Image
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139275/assests/turkey_rcgtw1.svg"
                  alt="Picture of the author"
                  width={70}
                  height={70}
                />
                <h1>Cooked Meals</h1>
              </div>
            </Link>
          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Cooked Meals">
              <div className={styles.item}>
                <Image
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139276/assests/Group_1490_hcjcrn.svg"
                  alt="Picture of the author"
                  width={70}
                  height={70}
                />
                <h1>Combo Meals</h1>
              </div>
            </Link>
          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Frozen Food Item">
              <div className={styles.item}>
                <Image
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139276/assests/frozen-yogurt_1_skqonn.svg"
                  alt="Picture of the author"
                  width={70}
                  height={70}
                />
                <h1>Frozen Food</h1>
              </div>
            </Link>
          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Desserts Item">
              <div className={styles.item}>
                <Image
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139274/assests/cake_f3igvv.svg"
                  alt="Picture of the author"
                  width={70}
                  height={70}
                />
                <h1>Desserts Item</h1>
              </div>
            </Link>
          </div>

          <div className={styles.Items}>
            <Link href="/menu?category=Organic Product">
              <div className={styles.item}>
                <Image
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139274/assests/organic_ig7zry.svg"
                  alt="Picture of the author"
                  width={70}
                  height={70}
                />
                <h1>Organic Product</h1>
              </div>
            </Link>
          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Fast Food Item">
              <div className={styles.item}>
                <Image
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139274/assests/Fill_Outline_dh0uzo.svg"
                  alt="Picture of the author"
                  width={70}
                  height={70}
                />
                <h1>Fast Food</h1>
              </div>
            </Link>
          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Catering Service">
              <div className={styles.item}>
                <Image
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139273/assests/waiter_r9l6x3.svg"
                  alt="Picture of the author"
                  width={70}
                  height={70}
                />
                <h1>Catering Service</h1>
              </div>
            </Link>
          </div>
          <div className={styles.Items}>
            <Link href="/menu?category=Office Meals">
              <div className={styles.item}>
                <Image
                  src="https://res.cloudinary.com/lakhrifood/image/upload/v1628853374/assests/breakfast_wcve0v.svg"
                  alt="Picture of the author"
                  width={70}
                  height={70}
                />
                <h1>Office Meals</h1>
              </div>
            </Link>
          </div>
        </div>
        <button onClick={() => scrollCategoriesNext()} className={`btn ms-4 ${ styles.scrollBtn }`}><i className="fas fa-chevron-right"></i></button>
      </div>
    </div>
  );
};

export default Catagories;
