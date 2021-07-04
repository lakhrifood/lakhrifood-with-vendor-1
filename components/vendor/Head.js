import Image from 'next/image';
import hero from "../../public/svg/hero.svg";
import styles from "../../styles/Header.module.css";

function Head() {
    return (
        <div>
            <div className="container">
                <div className={styles.head}>
                    <Image src={hero} alt="Welcome men women" width={1350} height={300} />
                </div>
            </div>
        </div>
    )
}

export default Head
