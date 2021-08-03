import Image from 'next/image';
import Navbar from '../components/Navbar'
import Footer from '../components/vendor/Footer/Footer';
import styles from '../styles/Charity.module.css';

function charity() {
    return (
        <div>
            <Navbar />
            <div className="container text-center">
                <Image
                    width={300}
                    height={300}
                    src="/./svg/Lakhri food logo.svg"
                />

                <p className="fs-3">
                    LAKHRI is an organization aiming to provide home-cooked meals to as many homeless and orphan children as possible for a better hunger-less Bangladesh. We, Lakhri, aim to help them by serving a hot, hygienic, home-cooked meal so that they have the energy and growth to overcome the obstacles in their daily life. A simple gesture can be worth innate humanity. Our intention through Lakhri would be to multiply the effects of goodness through serving a plate of home-cooked food to the hungered ones and that would be that innate humane act.
                </p>

                <p className="pt-5 fs-3">
                    "(The righteous are those) who feed the poor, the orphan and the captive for the love of God, saying: 'We feed you for the sake of God Alone; we seek from you neither reward nor thanks.'" - The Holy Quran, 76:8-9
                </p>

                <p className="pt-5 pb-4 fs-3">
                    The mission of Lakhri: “To bring change to the lives of homeless and orphan kids”
                </p>
            </div>
            <div>
                <img
                    className={styles.charityFristImage}
                    src="/./WhatsApp Image 2021-07-09 at 8.24.26 PM.png"
                    alt="charity image"
                />
            </div>
            <div className="container text-center">
                <p className="fs-3 pt-5">
                    ZERO HUNGER, Sustainable Development Goal (SDG) of 2030 is the second goal in the list of developments proposed by Bangladesh, to achieve access to sufficient and nutritious food all year round for all, and Lakhri as an NGO would make it happen as their mission. Lakhri would run through means of charitable purpose. Through collaborated organizations and individual donations, Lakhri plans to help with the ZERO HUNGER SDG of 2030 and will work closely to eliminate homelessness in the country. The entire system of cash flow of Lakhri would be transparent and thus spending on the sole purpose of logistical and raw materials for making homely fresh cooked food. The food that is cooked at home is the main desire of every hungered soul and on a large scale, it will surely generate a huge chain of homely cooked food for the hungered children all over Bangladesh. As per long-term visions, it will spread throughout Bangladesh
                </p>
                <p className="fs-3 pt-5 pb-4">
                    The main vision of Lakhri: ‘To sustain in the field till every hungry soul does not dim out their hope of light while struggling to better their lives on the street.”
                </p>
            </div>
            <div>
                <img
                    className={styles.charityFristImage}
                    src="/./WhatsApp Image 2021-07-09 at 8.24.30 PM.png"
                    alt="charity image"
                />
            </div>
            <div className="container text-center">
                <p className="fs-3 pt-5">
                    <strong>ZERO HUNGER</strong> the SDGs aim to end all forms of hunger and malnutrition by 2030, making sure all people – especially children – have access to sufficient and nutritious food all year round. This involves promoting sustainable agricultural practices: supporting small-scale farmers and allowing equal access to land, technology, and markets. It also requires international cooperation to ensure investment in infrastructure and technology to improve agricultural productivity. Together with the other goals set out here, we can end hunger by 2030.
                </p>

                <p className="fs-3 pt-5 pb-4">
                    Why choose Lakhri for collaboration?
                </p>
            </div>
            <div>
                <img
                    className={styles.charityFristImage}
                    src="/./WhatsApp Image 2021-07-09 at 8.24.33 PM (1).png"
                    alt="charity image"
                />
            </div>
            <div className="container text-center pb-5">
                <p className="fs-3 pt-5">
                    A business like yours would definitely want to expand market share by promotion, as a socially responsible organization would like to bring you a portion of the market share at your specific business. We carry out CSR to the society and with your support, we can give back to society by this collaboration through a small percentage of donation or charity. The customers we are bringing in through our motive would have an intention to donate to our cause, therefore a small percentage of any order or the designated products order will sponsor these hungry homeless children. As a citizen and an entrepreneur, both CSR and humane act is carried out through this intention.
                </p>
                <p className="fs-3 pt-5 pb-5">
                    With that, we hope that you would be a part of Lakhri’s journey and be the Social Superheroes Bangladesh needs!
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default charity
