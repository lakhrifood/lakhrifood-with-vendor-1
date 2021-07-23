import styles from '../../styles/Moneywithdraw.module.css';
import Navbar from '../../components/vendor/Navbar';
import Footer from '../../components/vendor/Footer/Footer';
import Image from 'next/image';
import Withdraw from '../../components/vendor/Modal/Withdraw';

function moneywithdraw() {
    return (
        <div>
            <Navbar />
            <Withdraw />
            <div style={{ backgroundColor: "#f6f6f6" }}>
                <div className="container pt-5 pb-5">
                    <div className="d-flex flex-wrap justify-content-between">
                        <h1 className={styles.title}>Money Withdraw</h1>
                        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className={`ms-3 btn ${ styles.addProductBtn }`}>Make Withdraw</button>
                    </div>

                    <div className="text-center p-3">
                        <div className={styles.moneyCard}>
                            <Image
                                width={50}
                                height={50}
                                src="/./svg/money (1).svg"
                                className={styles.moneyIMG} />
                            <h1>9000000 BDT</h1>
                            <p>Pending Balance</p>
                        </div>
                    </div>

                    <h1 className={`mt-5 ${ styles.title }`}>Payment History</h1>
                    <div className={`table-responsive ${ styles.paymentTable }`}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Deu Date</th>
                                    <th scope="col">Transition</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1/1/2021</th>
                                    <td>#1111111222</td>
                                    <td className="text-success" >Paid</td>
                                    <td>2000 BDT</td>
                                </tr>
                                <tr>
                                    <th scope="row">1/1/2021</th>
                                    <td>#1111111222</td>
                                    <td className="text-danger" >Unpaid</td>
                                    <td>2000 BDT</td>
                                </tr>
                                <tr>
                                    <th scope="row">1/1/2021</th>
                                    <td>#1111111222</td>
                                    <td className="text-success" >Paid</td>
                                    <td>2000 BDT</td>
                                </tr>
                                <tr>
                                    <th scope="row">1/1/2021</th>
                                    <td>#1111111222</td>
                                    <td className="text-danger" >Unpaid</td>
                                    <td>2000 BDT</td>
                                </tr>
                                <tr>
                                    <th scope="row">1/1/2021</th>
                                    <td>#1111111222</td>
                                    <td className="text-success" >Paid</td>
                                    <td>2000 BDT</td>
                                </tr>
                                <tr>
                                    <th scope="row">1/1/2021</th>
                                    <td>#1111111222</td>
                                    <td className="text-danger" >Unpaid</td>
                                    <td>2000 BDT</td>
                                </tr>
                                <tr>
                                    <th scope="row">1/1/2021</th>
                                    <td>#1111111222</td>
                                    <td className="text-success" >Paid</td>
                                    <td>2000 BDT</td>
                                </tr>
                                <tr>
                                    <th scope="row">1/1/2021</th>
                                    <td>#1111111222</td>
                                    <td className="text-danger" >Unpaid</td>
                                    <td>2000 BDT</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default moneywithdraw
