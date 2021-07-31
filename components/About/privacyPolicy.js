import styles from '../../styles/About.module.css';

function PrivacyPolicy() {
    return (
        <div className={`container text-center pt-5 pb-5 ${ styles.PrivacyPolicy }`}>
            <h1 className="text-color fs-1 fw-bold">Privacy Policy</h1>

            <p className="pt-5 pb-3">
                This policy explains how we, LAKHRI FOODS, a brand of <span className="text-color">http://www.LAKHRIFOODS.com</span>, use your personal information which you provide to us when using our service, including but not limited to our website and mobile applications (apps).
            </p>

            <h1 className="fw-bold fs-5 pb-3">What information do we collect about you?</h1>

            <p className="pt-3 pb-3">
                This policy explains how we, LAKHRI FOODS, a brand of <span className="text-color">http://www.LAKHRIFOODS.com</span>, use your personal information which you provide to us when using our service, including but not limited to our website and mobile applications (apps).
            </p>

            <h1 className="fw-bold fs-5 pb-3">What information do we collect about you?</h1>

            <p className="pt-3 pb-5">
                Information that we collect from you is used to process your order and to manage your account. We may also use your information to email you about other products or services that we think may be of interest to you.
            </p>
            <p className="pb-3 pt-3">
                In processing your order we may send your information to credit reference and fraud prevention agencies.
            </p>
            <br />
            <p>
                From time to time we may send your information to third parties which we consider may have goods or services which are of interest to you. If you do not wish to be contacted by third parties please email us at
            </p>
        </div >
    )
}

export default PrivacyPolicy
