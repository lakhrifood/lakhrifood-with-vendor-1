import styles from '../../styles/Moneywithdraw.module.css';
import Navbar from '../../components/vendor/Navbar';
import Footer from '../../components/vendor/Footer/Footer';
import Image from 'next/image';
import Withdraw from '../../components/vendor/Modal/Withdraw';
import { useEffect, useState } from 'react';
import { getBalance, getPaymentHistory, makeWithdraw } from '../../state/api/payment';

function Moneywithdraw() {
    const [pendingBalance, setPendingBalance] = useState(null);
    const [dep, setdep] = useState(null);
    const [request, setRequest] = useState(null);
    const [history, setHistory] = useState([]);

    // handle withdraws
    const handleWithdraw = async () => {
        if (pendingBalance >= 1000) {
            setRequest(`Your Request Has been Sent to the Admin Panel`);
            const { data } = await makeWithdraw(localStorage.getItem('vendorID'));
            setdep(data);
        } else {
            setRequest(`You can't send withdraw 
            request right now!`);
        }
    }

    console.log(history)

    useEffect(async () => {
        const { data } = await getBalance(localStorage.getItem('vendorID'), "pending")
        setPendingBalance(data.amount);
        const history = await getPaymentHistory(localStorage.getItem('vendorID'));
        setHistory(history.data);
    }, [dep]);

    return (
        <div>
            <Navbar />
            <Withdraw request={request} />
            <div style={{ backgroundColor: "#f6f6f6" }}>
                <div className="container pt-5 pb-5">
                    <div className="d-flex flex-wrap justify-content-between">
                        <h1 className={styles.title}>Money Withdraw</h1>
                        <button onClick={() => handleWithdraw()} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className={`ms-3 btn ${ styles.addProductBtn }`}>Make Withdraw</button>
                    </div>

                    <div className="text-center p-3">
                        <div className={styles.moneyCard}>
                            <Image
                                width={50}
                                height={50}
                                src="/./svg/money (1).svg"
                                className={styles.moneyIMG} />
                            <h1>{pendingBalance} BDT</h1>
                            <p>Pending Balance</p>
                        </div>
                    </div>

                    <h1 className={`mt-5 ${ styles.title }`}>Payment History</h1>
                    <div className={`table-responsive ${ styles.paymentTable }`}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Deu Date</th>
                                    <th scope="col">Paid Amount</th>
                                    <th scope="col">Unpaid Amount</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((payment, i) =>
                                    <tr key={i}>
                                        <th scope="row">{payment.createdAt} </th>
                                        <td> {payment.amountOfPaid}</td>
                                        <td> {payment.amountOfUnpaid}</td>
                                        <td className={payment.status === "paid" ? "text-uppercase fw-bold text-success" : "text-uppercase fw-bold text-danger"} >{payment.status}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Moneywithdraw
