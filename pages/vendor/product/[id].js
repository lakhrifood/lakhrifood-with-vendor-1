
import Navbar from "../../../components/vendor/Navbar";
import Footer from "../../../components/vendor/Footer/Footer";
import styles from "../../../styles/VendorProductDetails.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAndSetFoodActionByID } from "../../../state/action/FoodActions";
import { useDispatch, useSelector } from "react-redux";
import { deleteFood, publishFood } from "../../../state/Api/food";


function Productdetails() {
  const route = useRouter();
  const id = route.asPath.split("id=")[1];
  const dispatch = useDispatch();
  const { food } = useSelector((state) => state.food);
  const [dep, setDep] = useState(null);

  // handle delete food by id
  const handleDeleteFood = async () => {
    await deleteFood(id);
    route.push("/vendor/products");
  };
  const handlePublishOrUnpublishFood = async () => {
    await publishFood(id);
    setDep(Math.random());
  };

  useEffect(() => {
    dispatch(getAndSetFoodActionByID(id));
  }, [id, dep]);
  return (
    <div>
      <Navbar />
      <div className="container pt-5 pb-5">
        <div className="d-flex flex-wrap justify-content-between">
          <h1 className={styles.title}>Products</h1>
          <button className={`ms-3 btn ${styles.addProductBtn}`}>
            Add Product
          </button>
        </div>

        {food && (
          <div className="productWrapper mt-5">
            <Image
              width={500}
              height={300}
              className={styles.productImage}
              src={food && food.imgURL}
            />
            <div className={styles.productInfo}>
              <h2 className={styles.productTitle}>
                {food && food.name}
                <small>
                  <i className="far fa-clock me-1"></i> Delivery Time :{" "}
                  {food && food.estimatedDeliveryTime}
                </small>{" "}
              </h2>
              <h5 className={styles.ratingWrapper}>
                <span
                  className={` fa fa-star ${styles.starIcon} ${
                    food &&
                    Math.round(food.averageRating) >= 5 &&
                    styles.checked
                  }`}
                ></span>
                <span
                  className={`ms-2 fa fa-star ${styles.starIcon} ${
                    food &&
                    Math.round(food.averageRating) >= 4 &&
                    styles.checked
                  }`}
                ></span>
                <span
                  className={`ms-2 fa fa-star ${styles.starIcon} ${
                    food &&
                    Math.round(food.averageRating) >= 3 &&
                    styles.checked
                  }`}
                ></span>
                <span
                  className={`ms-2 fa fa-star ${styles.starIcon} ${
                    food &&
                    Math.round(food.averageRating) >= 2 &&
                    styles.checked
                  }`}
                ></span>
                <span
                  className={`ms-2 fa fa-star ${styles.starIcon} ${
                    food &&
                    Math.round(food.averageRating) >= 1 &&
                    styles.checked
                  }`}
                ></span>
                ({food && food.allRatings.length})
              </h5>
              <p className={styles.productDescription}>
                {food && food.description}
              </p>
              <h2 className={styles.category}>
                <strong>Category: </strong>
                {food && food.category}
              </h2>
              <h2 className={styles.category}>
                <strong>Unit: </strong>
                {food && food.totalQuantity}
              </h2>
              <h2 className={styles.category}>
                <strong>Price: </strong>
                {food && food.price} BDT
              </h2>
              <button
                onClick={() => handleDeleteFood()}
                className={`btn mt-2 ${styles.addProductBtn}`}
              >
                Delete
              </button>
              <button
                onClick={() => handlePublishOrUnpublishFood()}
                className={`btn ms-3 mt-2 ${
                  food && food.publish ? "btn-danger" : "btn-success"
                }`}
              >
                {food && food.publish ? "Unpublish" : "Publish"}
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Productdetails;
