import styles from '../../styles/SellerHeader.module.css';
import Image from 'next/image';

function SellerHeader() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`${ styles.logo } p-5`}>
                    <Image src="/./Lakhri food logo.svg" width={200} height={120} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SellerHeader
