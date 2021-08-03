import Image from 'next/image';
import styles from '../styles/JoinAsVendorOrRider.module.css';

function JoinAsVendorOrRider() {
    return (
        <div className={styles.JoinAsVendorOrRiderWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className={styles.riderWrapper}>
                            <div className={styles.rider}>
                                <h2 className="text-start">Become a <br /> Rider</h2>
                                <button className="btn btn-dark">Signup As a Rider</button>
                            </div>
                            <Image src="/./svg/delivery-boy.svg" width={100} height={100} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.riderWrapper}>
                            <Image src="/./svg/baker.svg" width={100} height={100} />
                            <div className={styles.homechef}>
                                <h2 className="text-end">Become a <br /> Homechef</h2>
                                <button className="btn btn-dark">Signup As a Homechef</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinAsVendorOrRider
