import styles from "../../styles/Auth.module.css";
const signin = () => {
  return (
    <div className={styles.container}>
      <div className={`card ${styles.cardLog}`}>
        <div className={styles.header}>
          <h1>Welcome !</h1>
          <p>Sign Up or Login to Continue.</p>
        </div>
        <div className={styles.cardInput}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-outline-primary">
            <p className={styles.btnTxt}>
              {" "}
              <i className="fab fa-facebook"></i> Continue With Facebook
            </p>
          </button>
          <h1 className="text-center">
            <strong>Or</strong>
          </h1>
          <button type="button" className="btn btn-outline-danger">
            <p className={styles.btnTxt}>
              <i className="fab fa-google mr-10"></i>Continue With Google
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default signin;
