import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/JoinAsVendorOrRider.module.css';

function JoinAsVendorOrRider() {
    return (
        <div className={styles.JoinAsVendorOrRiderWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className={styles.riderWrapper}>
                            <div className={styles.rider}>
                                <h2 className="text-start text-dark">Become a <br /> Rider</h2>
                                <button className="btn btn-dark">Signup As a Rider</button>
                            </div>
                            <Image className="mt-4" src="https://res.cloudinary.com/lakhrifood/image/upload/v1628139832/assests/undraw_On_the_way_re_swjt_vngjv8.svg" width={100} height={100} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.riderWrapper}>
                            <Image src="https://res.cloudinary.com/lakhrifood/image/upload/v1628142155/assests/undraw_Chef_cu0r_mterdm.svg" width={100} height={100} />
                            <div className={styles.homechef}>
                                <h2 className="text-end text-dark">Become a <br /> Homechef</h2>
                                <Link href="/vendor/signup">
                                    <button className="btn btn-dark">Signup As a Homechef</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinAsVendorOrRider
