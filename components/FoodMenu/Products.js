import React from 'react'
import styles from './Products.module.css';
import Image from 'next/image'

function Products() {
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

            <div className="d-flex flex-wrap justify-content-between pt-3">
                <div className={`card ${ styles.productCard }`}>
                    <Image
                        src="/./pizza-beer-1200x628-facebook-1200x628.png"
                        width="100%"
                        height="280px"
                        className={`card-img-top ${ styles.cardImage }`}
                        alt="..." />
                    <div className="card-body">
                        <h5>Pizza  Item <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>120.00 BDT</h3>
                            <button className="btn btn-bg">
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                        <p><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</p>
                    </div>
                </div>
                {/* Another one */}
                <div className={`card ${ styles.productCard }`}>
                    <Image
                        src="/./pizza-beer-1200x628-facebook-1200x628.png"
                        width="100%"
                        height="280px"
                        className={`card-img-top ${ styles.cardImage }`}
                        alt="..." />
                    <div className="card-body">
                        <h5>Pizza  Item <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>120.00 BDT</h3>
                            <button className="btn btn-bg">
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                        <p><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</p>
                    </div>
                </div>
                {/* Another one */}
                <div className={`card ${ styles.productCard }`}>
                    <Image
                        src="/./pizza-beer-1200x628-facebook-1200x628.png"
                        width="100%"
                        height="280px"
                        className={`card-img-top ${ styles.cardImage }`}
                        alt="..." />
                    <div className="card-body">
                        <h5>Pizza  Item <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>120.00 BDT</h3>
                            <button className="btn btn-bg">
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                        <p><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</p>
                    </div>
                </div>
                {/* Another one */}
                <div className={`card ${ styles.productCard }`}>
                    <Image
                        src="/./pizza-beer-1200x628-facebook-1200x628.png"
                        width="100%"
                        height="280px"
                        className={`card-img-top ${ styles.cardImage }`}
                        alt="..." />
                    <div className="card-body">
                        <h5>Pizza  Item <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>120.00 BDT</h3>
                            <button className="btn btn-bg">
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                        <p><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</p>
                    </div>
                </div>
                {/* Another one */}
                <div className={`card ${ styles.productCard }`}>
                    <Image
                        src="/./pizza-beer-1200x628-facebook-1200x628.png"
                        width="100%"
                        height="280px"
                        className={`card-img-top ${ styles.cardImage }`}
                        alt="..." />
                    <div className="card-body">
                        <h5>Pizza  Item <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>120.00 BDT</h3>
                            <button className="btn btn-bg">
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                        <p><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</p>
                    </div>
                </div>
                {/* Another one */}
                <div className={`card ${ styles.productCard }`}>
                    <Image
                        src="/./pizza-beer-1200x628-facebook-1200x628.png"
                        width="100%"
                        height="280px"
                        className={`card-img-top ${ styles.cardImage }`}
                        alt="..." />
                    <div className="card-body">
                        <h5>Pizza  Item <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>120.00 BDT</h3>
                            <button className="btn btn-bg">
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                        <p><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</p>
                    </div>
                </div>
                {/* Another one */}
                <div className={`card ${ styles.productCard }`}>
                    <Image
                        src="/./pizza-beer-1200x628-facebook-1200x628.png"
                        width="100%"
                        height="280px"
                        className={`card-img-top ${ styles.cardImage }`}
                        alt="..." />
                    <div className="card-body">
                        <h5>Pizza  Item <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>120.00 BDT</h3>
                            <button className="btn btn-bg">
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                        <p><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</p>
                    </div>
                </div>
                {/* Another one */}
                <div className={`card ${ styles.productCard }`}>
                    <Image
                        src="/./pizza-beer-1200x628-facebook-1200x628.png"
                        width="100%"
                        height="280px"
                        className={`card-img-top ${ styles.cardImage }`}
                        alt="..." />
                    <div className="card-body">
                        <h5>Pizza  Item <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>120.00 BDT</h3>
                            <button className="btn btn-bg">
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                        <p><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</p>
                    </div>
                </div>
                {/* Another one */}
                <div className={`card ${ styles.productCard }`}>
                    <Image
                        src="/./pizza-beer-1200x628-facebook-1200x628.png"
                        width="100%"
                        height="280px"
                        className={`card-img-top ${ styles.cardImage }`}
                        alt="..." />
                    <div className="card-body">
                        <h5>Pizza  Item <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span>
                            <span className={`fa fa-star ${ styles.starIcon } ${ styles.checked }`}></span> (450)</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>120.00 BDT</h3>
                            <button className="btn btn-bg">
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                        <p><i className="far fa-clock me-1"></i> Delivery Time : 35 Min</p>
                    </div>
                </div>
                {/* Another one */}
            </div>
        </div>
    )
}

export default Products
