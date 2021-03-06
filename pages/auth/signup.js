import styles from "../../styles/Auth.module.css";
import { useState } from "react";
import { SignupAction } from "../../state/action/AuthAction";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { signUpAuth } from "../../state/Api/auth";
const Signup = () => {
  // const history = useHistory();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [successSignUs, setSuccessSignUs] = useState(false);
  const [password, setPassword] = useState('')
  const [Cpassword, setCPassword] = useState('')
  const dispatch = useDispatch();
  const [cred, setcred] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    authenticationType: "normal",
  });
  const handleSignup = async () => {
    try {
      const { data } = await signUpAuth(cred);

      setSuccessSignUs(true);
    } catch (e) {
      setError(e);
    }
  };
  return (
    <div className={styles.containerSignup}>
      {successSignUs ? (
        <div className={`card ${ styles.cardSuccessSignup }`}>
          <h1 className="fs-2">
            <i className="fas text-success fa-check-circle"></i> Successfully
            Signed Up!
          </h1>
          <h1 className="fs-5 ps-4 pt-3 ">
            Please{" "}
            <span className="fw-bold text-color">
              <Link href="/auth/signin">Login</Link>
            </span>{" "}
            to Continue.
          </h1>
        </div>
      ) : (
        <div className={`card ${ styles.cardLogSignup }`}>
          <div className={styles.cardInput}>
            <div className="form-group">
              <label className={styles.labels} htmlFor="exampleInputEmail1">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={cred.email}
                onChange={(e) => {
                  setcred({ ...cred, email: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label className={styles.labels} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={cred.password}
                onChange={(e) => {
                  setcred({ ...cred, password: e.target.value });
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label className={styles.labels} htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirmed Password"
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
            </div>

            {password === Cpassword ? ("") : (
              <p className="text-danger fw-normal">Your password is not same!</p>
            )}

            <div className="form-group">
              <label className={styles.labels} htmlFor="exampleInputEmail1">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your name"
                value={cred.name}
                onChange={(e) => {
                  setcred({ ...cred, name: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label className={styles.labels} htmlFor="exampleInputEmail1">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your phoneNumber"
                value={cred.phoneNumber}
                onChange={(e) => {
                  setcred({ ...cred, phoneNumber: e.target.value });
                }}
              />
            </div>

            {/* <div className="form-group">
              <label className={styles.labels} htmlFor="exampleInputEmail1">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your address"
                value={cred.address}
                onChange={(e) => {
                  setcred({ ...cred, address: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label className={styles.labels} htmlFor="exampleInputEmail1">
                Gender
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={cred.gender}
                onChange={(e) => {
                  setcred({ ...cred, gender: e.target.value });
                }}
              >
                <option selected>Choose </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label className={styles.labels} htmlFor="exampleInputEmail1">
                Division
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={cred.division}
                onChange={(e) => {
                  setcred({ ...cred, division: e.target.value });
                }}
              >
                <option selected value="Khulna">
                  Khulna{" "}
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rajshahi">Rajshahi</option>
              </select>
            </div>
            <div className="form-group">
              <label className={styles.labels} htmlFor="exampleInputEmail1">
                City
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={cred.city}
                onChange={(e) => {
                  setcred({ ...cred, city: e.target.value });
                }}
              >
                <option selected value="Khulna">
                  Khulna{" "}
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rajshahi">Rajshahi</option>
              </select>
            </div> */}

            {password === Cpassword ? (
              <button
                type="submit"
                className="btn btn-primary mt-3"
                onClick={() => {
                  handleSignup();
                }}
              >
                Submit
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary mt-3"
                disabled
                onClick={() => {
                  handleSignup();
                }}
              >
                Submit
              </button>
            )}


            <div className="mt-3 text-center">
              {error ? <p className={styles.error}>{error}</p> : null}
              <p>
                Already member?
                <strong className="text-color">
                  {" "}
                  <Link href="/auth/signin">Login </Link>
                </strong>
                here.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
