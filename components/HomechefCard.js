import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/ProductCard.module.css";

function HomechefCard({ business }) {
  return (
    <Link
      href={`/homechef/${business && business.organizationName}?id=${
        business && business._id
      }`}
    >
      <div className={`card ${styles.productCard}`}>
        {business && (
          <>
            {business ? (
              <Image
                src={
                  business.imgURL
                    ? business.imgURL
                    : "https://images.unsplash.com/photo-1500315331616-db4f707c24d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                }
                width="300px"
                height="250px"
                className={`card-img-top ${styles.cardImage}`}
                alt="..."
              />
            ) : null}

            <div className="card-body">
              <h5>
                {business.organizationName}
                <span
                  className={`ms-3 fa fa-star ${styles.starIcon} ${
                    Math.round(business.averageRating) >= 1 && styles.checked
                  }`}
                ></span>
                <span
                  className={`fa fa-star ${styles.starIcon} ${
                    Math.round(business.averageRating) >= 2 && styles.checked
                  }`}
                ></span>
                <span
                  className={`fa fa-star ${styles.starIcon} ${
                    Math.round(business.averageRating) >= 3 && styles.checked
                  }`}
                ></span>
                <span
                  className={`fa fa-star ${styles.starIcon} ${
                    Math.round(business.averageRating) >= 4 && styles.checked
                  }`}
                ></span>
                <span
                  className={`me-3 fa fa-star ${styles.starIcon} ${
                    Math.round(business.averageRating) >= 5 && styles.checked
                  }`}
                ></span>
                ({business.allRatings.length})
              </h5>
              <p>{business.description}</p>
              <p>
                <i className="far fa-clock me-1"></i> Delivery Time :
                {business.estimatedDeliveryTime}
              </p>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default HomechefCard;
