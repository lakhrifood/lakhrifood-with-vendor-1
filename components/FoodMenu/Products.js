import React, { useEffect } from "react";
import styles from "../../styles/products.module.css";
import Image from "next/image";
import ProductCard from "../ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAndSetFoodAction,
  getAndSetFoodActionBySearch,
} from "../../state/action/FoodActions";

function Products() {
  const dispatch = useDispatch();
  const { foods } = useSelector((state) => state.food);

  useEffect(() => {
    dispatch(getAndSetFoodAction());
  }, []);
  return (
    <div className={styles.productsWrapper}>
      <div className="mt-5 d-flex justify-content-between">
        <div className={`input-group mb-3 w-25 ${styles.searchField}`}>
          <input
            type="text"
            className={` form-control`}
            placeholder={"Search For Food"}
            aria-label="Enter Your Area"
            aria-describedby="basic-addon2"
            onChange={(e) =>
              dispatch(getAndSetFoodActionBySearch(e.target.value))
            }
          />
          <div className="input-group-append">
            <button className="btn btn-bg" type="button">
              Search
            </button>
          </div>
        </div>

        {/* <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort by popular product
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button className="dropdown-item" type="button">Action</button></li>
                        <li><button className="dropdown-item" type="button">Another action</button></li>
                        <li><button className="dropdown-item" type="button">Something else here</button></li>
                    </ul>
                </div> */}
      </div>

      <div className="d-flex flex-wrap justify-content-around pt-3">
        {foods &&
          foods.map((food, index) => (
            <ProductCard key={index} product={food} />
          ))}
      </div>
    </div>
  );
}

export default Products;
