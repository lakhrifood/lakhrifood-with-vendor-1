import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/SideBar.module.css';
import { makeStyles, Slider } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${ value } BDT`;
}

function SideBar() {
    const classes = useStyles();
    const [value, setValue] = useState([0, 1000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={`${ styles.sidebar }`}>
            <ul className={`${ styles.sideMenu } list-unstyled`}>
                <h1>Menu</h1>
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

                <h3 className="pt-3">Categories</h3>
                <li className="active">
                    <Link href="/">
                        <a>Home Chefs</a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/appointments">
                        <a>Combo Meals</a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/users">
                        <a>Cooked Meals</a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/users">
                        <a>Frozen Food Item</a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/users">
                        <a>Desserts Item</a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/users">
                        <a>Organic Product</a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/users">
                        <a>Fast Food Item</a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/users">
                        <a>Catering Service </a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/users">
                        <a>Office Meals </a>
                    </Link>
                </li>


                <h3>Rating & Review</h3>
                <li className="target">
                    <Link href="/users">
                        <a>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            5 Star
                        </a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/users">
                        <a>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon }`}></span>
                            4 Star
                        </a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/users">
                        <a>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon }`}></span>
                            3 Star
                        </a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/users">
                        <a>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon }`}></span>
                            2 Star
                        </a>
                    </Link>
                </li>
                <li className="target">
                    <Link href="/users">
                        <a>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon }`}></span>
                            1 Star
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
