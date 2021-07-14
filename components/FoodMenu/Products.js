import React, { useEffect } from 'react'
import styles from './Products.module.css';
import Image from 'next/image'
import ProductCard from '../ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAndSetFoodAction } from '../../state/action/FoodActions';

function Products() {
    const dispatch = useDispatch();
    const { foods } = useSelector((state) => state.food)

    useEffect(() => {
        dispatch(getAndSetFoodAction());
    }, []);
    return (
        <div className={styles.productsWrapper}>
            <div className="d-flex justify-content-between">
                <div className={`input-group mb-3 ${ styles.searchField }`}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={"Search For Food"}
                        aria-label="Enter Your Area"
                        aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-bg" type="button">
                            Search
                        </button>
                    </div>
                </div>

                <div className="dropdown">
                    <a className="btn btn-transparent dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Short: By popularity
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-around pt-3">
                {
                    foods && foods.map((food, index) => <ProductCard key={index} product={food} />)
                }
            </div>
        </div>
    )
}

export default Products
