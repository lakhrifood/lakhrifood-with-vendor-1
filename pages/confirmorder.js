import styles from "../styles/ConfirmOrder.module.css";
import Navbar from "../components/Navbar";
const confirmorder = () => {
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.containersConfirm}`}>
        <div>
          <h1 className={styles.headline}>Confirm Order</h1>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div>
            <h1 className={styles.headline}>Payment section</h1>
            <div className={styles.paymentSection}>
              <div className={`${styles.payItem}`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />

                <h5>Bkash</h5>
              </div>

              <div className={`${styles.payItem}`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />

                <h5>DBBL</h5>
              </div>

              <div className={`${styles.payItem}`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />

                <h5>Paytm</h5>
              </div>

              <div className={`${styles.payItem}`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />

                <h5>Rocket</h5>
              </div>

              <div className={`${styles.payItem}`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <h5>Cash on delivery</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerBill}>
          <h5 className={styles.headline}>
            Your Order{" "}
            <h6 className={`card-subtitle mb-2 text-muted `}>
              Tracking ID #ansdnj
            </h6>
          </h5>
          <div className={` ${styles.containeritems}`}>
            <div className={styles.itemCheck}>
              <h5>Quantity </h5>
              <h5> 3</h5>
            </div>
            <div className={styles.itemCheck}>
              <h5>Price </h5>
              <h5> 400BDT</h5>
            </div>
            <div className={styles.itemCheck}>
              <h5>Delivery Charge </h5>
              <h5> 30BDT</h5>
            </div>
            <div className={styles.itemCheck}></div>
            <div className={styles.itemCheck}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Promo code"
                aria-label="Enter Promo code"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  check
                </button>
              </div>
            </div>
            <div className={styles.itemCheck}>
              <h5 className={styles.headline}>Total </h5>
              <h5 className={styles.headline}> 3033BDT</h5>
            </div>
            <div>
              <button
                type="button"
                className={`btn btn-lg btn-primary ${styles.btnGhor}`}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default confirmorder;
