const { default: Footer } = require("@/components/vendor/Footer/footer");
const { default: Navbar } = require("@/components/vendor/Navbar");
import Image from "next/image";
import styles from "../../styles/vendor/Dashboard.module.css";
const dashboard = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div className={styles.background}>
        <div className="container">
          <h1 className={styles.h1}>Dashboard</h1>
          <div className={styles.header}>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Total Products</h4>
                <h2 className="h2">1340</h2>
              </div>
              <div>
                <i className={`fas fa-baby-carriage ${styles.headicon}`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Total Earnings</h4>
                <h2 className="h2">1340tk</h2>
              </div>
              <div>
                <i className={`fas fa-money-check-alt ${styles.headicon}`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Total Sale</h4>
                <h2 className="h2">1340</h2>
              </div>
              <div>
                <i className={`fas fa-shopping-basket ${styles.headicon}`}></i>
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h4 className="h5">Successfull Order</h4>
                <h2 className="h2">450</h2>
              </div>
              <div>
                <i className={`fas fa-clipboard-check ${styles.headicon}`}></i>
              </div>
            </div>
          </div>
          <div className="activerOrder">
            <h1 className={styles.h1}>Orders</h1>
            <div className={styles.cardOrderSection}>
              <div className={styles.cardOrder}>
                <div className={styles.firstCard}>
                  <div>
                    <Image
                      src="/../public/profile.png"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                      className={styles.profilePic}
                    />
                    <h1>Rakib islam</h1>
                  </div>
                  <div>
                    <h4 className="h5">Order ID:#adsnlasdn</h4>
                    <Image
                      src="/../public/9-2-food-png-file.png"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                      className={styles.profilePic}
                    />
                    <h3 className="h5">Chicken Wings</h3>
                    <h2 className="h6"> Qty:5pc</h2>
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-success">Accept</button>
                        <button className="btn btn-danger">Reject</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardOrder}>
                <div className={styles.firstCard}>
                  <div>
                    <Image
                      src="/../public/profile.png"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                      className={styles.profilePic}
                    />
                    <h1>Rakib islam</h1>
                  </div>
                  <div>
                    <h4 className="h5">Order ID:#adsnlasdn</h4>
                    <Image
                      src="/../public/9-2-food-png-file.png"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                      className={styles.profilePic}
                    />
                    <h3 className="h5">Chicken Wings</h3>
                    <h2 className="h6"> Qty:5pc</h2>
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-success">Accept</button>
                        <button className="btn btn-danger">Reject</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardOrder}>
                <div className={styles.firstCard}>
                  <div className={styles.prosec}>
                    <Image
                      src="/../public/profile.png"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                      className={styles.profilePic}
                    />
                    <h1>Rakib islam</h1>
                  </div>
                  <div>
                    <h4 className="h5">Order ID:#adsnlasdn</h4>
                    <Image
                      src="/../public/9-2-food-png-file.png"
                      alt="Picture of the author"
                      width={50}
                      height={50}
                      className={styles.profilePic}
                    />
                    <h3 className="h5">Chicken Wings</h3>
                    <h2 className="h6"> Qty:5pc</h2>
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-success">Accept</button>
                        <button className="btn btn-danger">Reject</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
