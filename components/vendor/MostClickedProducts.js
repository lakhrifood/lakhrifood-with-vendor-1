import styles from '../../styles/products.module.css';
import EditProduct from './Modal/EditProduct';

function MostClickedProducts() {
    return (
        <div className={styles.clickedProductsWrapper}>
            <div className="text-start">
                <h4 className={styles.cProTitle}>Most Clicked</h4>
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
                                <EditProduct />
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
                                <EditProduct />
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
                                <EditProduct />
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
                                <EditProduct />
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

export default MostClickedProducts
