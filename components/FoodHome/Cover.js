import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import router from "next/router";
const Cover = () => {

  const [search, setSearch] = useState(null);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.textCon}>
        <h1>
          Set Meals <span className={styles.blueTxt}>Delivery</span> In Dhaka
        </h1>
        <p>Choose a set or combine your own and get your order in time.</p>
        <div className={`input-group mb-3 ${ styles.searchField }`}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Favorite Food Name"
            aria-label="Enter Your Area"
            aria-describedby="basic-addon2"
            onChange={e => setSearch(e.target.value)}
          />
          <div className="input-group-append">

            <button
              className="btn btn-bg"
              type="button"
              onClick={() => {
                router.push(`/menu?search=${ search }`);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className={`${ styles.imgSection }`}>

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139303/assests/9-2-food-png-file_rjq0mv.png" className="d-block  img-fluid" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="https://res.cloudinary.com/lakhrifood/image/upload/v1628753966/assests/2-2-food-png-hd_bjbkmv.png" className="d-block  img-fluid" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="https://res.cloudinary.com/lakhrifood/image/upload/v1628753962/assests/4-2-food-png_utchne.png" className="d-block  img-fluid" alt="..." />
            </div>
          </div>
        </div>

        {/* <Image
          src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139303/assests/9-2-food-png-file_rjq0mv.png"
          alt="Picture of the author"
          width={600}
          height={350}
        /> */}
      </div>
    </div>
  );
};

export default Cover;
