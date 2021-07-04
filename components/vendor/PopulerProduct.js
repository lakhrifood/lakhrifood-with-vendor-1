import styles from '../../styles/products.module.css';

function PopulerProduct() {
    return (
        <div className={styles.popularProductsWrapper}>
            <div className="text-end">
                <h4 className={styles.pProTitle}>Most Popular</h4>
                <div className={`d-flex flex-wrap justify-content-between ${ styles.cardWrapper }`} >
                    {/* first product card */}
                    <div className={styles.productCard}>
                        <div className={styles.cardOverlay}>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.proInfo}>
                                <h2>Burger</h2>
                                <h2>300 Tk</h2>
                            </div>
                            <div className={styles.proAction} >
                                <h3><i className="far fa-edit"></i></h3>
                                <label className={styles.switch}>
                                    <input type="checkbox" />
                                    <span className={`${ styles.slider } ${ styles.round } `}></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* another one */}
                    <div className={styles.productCard}>
                        <div className={styles.cardOverlay}>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.proInfo}>
                                <h2>Burger</h2>
                                <h2>300 Tk</h2>
                            </div>
                            <div className={styles.proAction} >
                                <h3><i className="far fa-edit"></i></h3>
                                <label className={styles.switch}>
                                    <input type="checkbox" />
                                    <span className={`${ styles.slider } ${ styles.round } `}></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* another one */}
                    <div className={styles.productCard}>
                        <div className={styles.cardOverlay}>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.proInfo}>
                                <h2>Burger</h2>
                                <h2>300 Tk</h2>
                            </div>
                            <div className={styles.proAction} >
                                <h3><i className="far fa-edit"></i></h3>
                                <label className={styles.switch}>
                                    <input type="checkbox" />
                                    <span className={`${ styles.slider } ${ styles.round } `}></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* another one */}
                    <div className={styles.productCard}>
                        <div className={styles.cardOverlay}>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.proInfo}>
                                <h2>Burger</h2>
                                <h2>300 Tk</h2>
                            </div>
                            <div className={styles.proAction} >
                                <h3><i className="far fa-edit"></i></h3>
                                <label className={styles.switch}>
                                    <input type="checkbox" />
                                    <span className={`${ styles.slider } ${ styles.round } `}></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* another one */}
                </div>
            </div>
        </div>
    )
}

export default PopulerProduct
