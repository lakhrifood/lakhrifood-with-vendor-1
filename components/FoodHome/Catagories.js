import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Catagories = () => {


  return (
    <div className={styles.cataContainer}>
      <h1>Categories</h1>
      <Carousel
        className={styles.Carousel}
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        arrows={false}
        infinite={true}
        autoPlay={true}
        ssr={true}
        autoPlaySpeed={2000}
      >
        <div className={styles.Items}>
          <div className={styles.item}>
            <Image
              src="/../public/chef.png"
              alt="Picture of the author"
              width={90}
              height={110}
            />
            <h1>Combo Meals</h1>
          </div>
        </div>
        {/* another one */}
        <div className={styles.Items}>
          <div className={styles.item}>
            <Image
              src="/../public/chef.png"
              alt="Picture of the author"
              width={90}
              height={110}
            />
            <h1>Cooked Meals</h1>
          </div>
        </div>
        {/* another one */}
      </Carousel>

      
      <div className={styles.cataCon}>

        <div className={styles.Items}>
          <div className={styles.item}>
            <Image
              src="/../public/chef.png"
              alt="Picture of the author"
              width={90}
              height={110}
            />
            <h1>Combo Meals</h1>
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
            <h1>Cooked Meals</h1>
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
            <h1>Frozen Food Item</h1>
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
            <h1>Desserts Item</h1>
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
            <h1>Organic Product</h1>
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
            <h1>Fast Food Item</h1>
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
            <h1>Catering Service</h1>
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
            <h1>Office Meals</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
