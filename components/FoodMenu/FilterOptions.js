import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/SideBar.module.css';
import { makeStyles, Slider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getByCategoryFood } from '../../state/Api/food';
import { getAndSetByCategoryFoodAction, getAndSetFoodActionByPrice, getAndSetFoodActionByRating } from '../../state/action/FoodActions';
import { useEffect } from 'react';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${ value } BDT`;
}

function FilterOptions({ mobile }) {
    const dispatch = useDispatch();

    const classes = useStyles();
    const [value, setValue] = useState([0, 1000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        dispatch(getAndSetFoodActionByPrice(value[0], value[1]));
    };
    return (
        <ul className={`${ styles.sideMenu } ${ !mobile && styles.sideMenuLarge } list-unstyled`}>
            <div>
                <h3>Price </h3>

                <Slider
                    className={styles.priceSlector}
                    value={value}
                    min={0}
                    max={1000}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
                <div className={styles.priceMenu}>
                    <p>From:</p> <input className="" type="number" value={value[0]} name="" id="from" />
                    <p>To:</p> <input className="" type="number" value={value[1]} name="" id="from" />
                </div>
            </div>

            <div>
                <h3 className="pt-3">Categories</h3>
                <li className="active">
                    <Link href="/homechefs">
                        <a>Home Chefs</a>
                    </Link>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={(e) => dispatch(getAndSetByCategoryFoodAction(e.target.innerText))} >Combo Meals</a>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={(e) => dispatch(getAndSetByCategoryFoodAction(e.target.innerText))} >Cooked Meals</a>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={(e) => dispatch(getAndSetByCategoryFoodAction(e.target.innerText))}>Frozen Food Item</a>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={(e) => dispatch(getAndSetByCategoryFoodAction(e.target.innerText))}>Desserts Item</a>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={(e) => dispatch(getAndSetByCategoryFoodAction(e.target.innerText))}>Organic Product</a>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={(e) => dispatch(getAndSetByCategoryFoodAction(e.target.innerText))}>Fast Food Item</a>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={(e) => dispatch(getAndSetByCategoryFoodAction(e.target.innerText))}>Catering Service</a>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={(e) => dispatch(getAndSetByCategoryFoodAction(e.target.innerText))}>Office Meals</a>
                </li>
            </div>


            <div>
                <h3>Rating & Review</h3>
                <li className={styles.targetMenu}>
                    <a onClick={() => dispatch(getAndSetFoodActionByRating(5))}>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        5 Star
                    </a>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={() => dispatch(getAndSetFoodActionByRating(4))}>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon }`}></span>
                        4 Star
                    </a>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={() => dispatch(getAndSetFoodActionByRating(3))}>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon }`}></span>
                        3 Star
                    </a>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={() => dispatch(getAndSetFoodActionByRating(2))}>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon }`}></span>
                        2 Star
                    </a>
                </li>
                <li className={styles.targetMenu}>
                    <a onClick={() => dispatch(getAndSetFoodActionByRating(1))}>
                        <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon }`}></span>
                        <span className={`fa fa-star ${ styles.starIcon }`}></span>
                        1 Star
                    </a>
                </li>
            </div>
        </ul>
    )
}

export default FilterOptions
