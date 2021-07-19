import styles from '../../styles/VendorProducts.module.css';
import Navbar from '../../components/vendor/Navbar';
import Footer from '../../components/vendor/Footer/Footer';
import ProductCard from '../../components/ProductCard';
import { getAndSetFoodAction } from '../../state/action/FoodActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Index() {
    const dispatch = useDispatch();
    const { foods } = useSelector((state) => state.food);

    useEffect(async () => {
        await dispatch(getAndSetFoodAction());
    }, []);
    return (
        <div>
            <Navbar />
            <div className="container pt-5 pb-5">
                <div className="d-flex flex-wrap justify-content-between">
                    <h1 className={styles.title}>Products</h1>
                    <div className="d-flex flex-wrap">
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                                <li><a className="dropdown-item active" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button className={`ms-3 btn ${ styles.addProductBtn }`}>Add Product</button>
                    </div>
                </div>

                <div className="pt-5 d-flex flex-wrap justify-content-between">

                    {foods &&
                        foods.map((food, index) => (
                            <ProductCard key={index} product={food} />
                        ))}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index

