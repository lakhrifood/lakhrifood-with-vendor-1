import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/SideBar.module.css';
import { makeStyles, Slider } from '@material-ui/core';
import FilterOptions from './FilterOptions';
import { useDispatch } from 'react-redux';

function SideBar() {
    const [filterVisible, setFilterVisible] = useState(null);
    const dispatch = useDispatch();

    return (
        <div className={`${ styles.sidebar }`}>
            <h1>Menu</h1>
            <button onClick={() => setFilterVisible(filterVisible ? false : true)} className={`btn btn-bg ${ styles.filterDropdown }`}>Filter Options</button>
            {filterVisible && filterVisible === true
                ? <FilterOptions mobile={true} />
                : ""}
            <FilterOptions mobile={false} />
        </div>
    )
}

export default SideBar
