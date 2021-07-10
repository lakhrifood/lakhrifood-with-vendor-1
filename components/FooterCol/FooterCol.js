import Image from 'next/image';
import Link from 'next/link'
import styles from './FooterCol.module.css'

function FooterCol(props) {
    return (
        <div className="col-md-3">
            {
                props.menuTitle
                    ? <h6 className={styles.title}>{props.menuTitle}</h6>
                    : (props.menuLogo ? <Image className={styles.FooterLogo} width={100} height={100} src={props.menuLogo} /> : '')
            }
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li className={styles.items} key={index}><Link href={item.link}>{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
}

export default FooterCol;