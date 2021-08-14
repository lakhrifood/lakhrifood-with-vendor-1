import styles from "../../styles/VendorSignup.module.css";
import { useState } from "react";
import { SignupAction } from "../../state/action/AuthAction";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { signUpAuthForVendor } from "../../state/Api/auth";
const Signup = () => {
  // const history = useHistory();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [successSignUs, setSuccessSignUs] = useState(false);
  const dispatch = useDispatch();
  const [cred, setcred] = useState({
    ownerName: "",
    organizationName: "",
    organizationAddress: "",
    nidNumber: "",
    email: "",
    password: "",
    phoneNumber: "",
    authenticationType: "normal",
    Type: "Vendor",
    OwnerGender: "",
    division: "",
    city: "",
    country: "Bangladesh",
  });
  const handleSignup = async () => {
    console.log(cred);
    try {
      const { data } = await signUpAuthForVendor(cred);
      setSuccessSignUs(true);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };
  return (
    <div className={styles.containerSignup}>
      {successSignUs ? (
        <div className={`card ${styles.cardSuccessSignup}`}>
          <h1 className="fs-2">
            <i className="fas text-success fa-check-circle"></i> Successfully
            Signed Up!
          </h1>
          <h1 className="fs-5 ps-4 pt-3 ">
            Please{" "}
            <span className="fw-bold text-color">
              <Link href="/vendor/signin">Login</Link>
            </span>{" "}
            to Continue.
          </h1>
        </div>
      ) : (
        <div className={`card ${styles.cardLogSignup}`}>
          <div className={styles.cardInput}>
            <div className="form-group">
              <h4 className={styles.regTitle}>Registration</h4>
              <label className={styles.labels} htmlFor="ownerName">
                Vendor Owner Full Name
              </label>
              <input
                type="name"
                className="form-control"
                id="ownerName"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
                value={cred.ownerName}
                onChange={(e) => {
                  setcred({ ...cred, ownerName: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label className={styles.labels} htmlFor="shopName">
                Shop Name
              </label>
              <input
                type="name"
                className="form-control"
                id="shopName"
                placeholder="Shop Name"
                value={cred.organizationName}
                onChange={(e) => {
                  setcred({ ...cred, organizationName: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label className={styles.labels} htmlFor="shopLocation">
                Shop Location
              </label>
              <input
                type="text"
                className="form-control"
                id="shopLocation"
                aria-describedby="emailHelp"
                placeholder="Enter Shop Location"
                value={cred.organizationAddress}
                onChange={(e) => {
                  setcred({ ...cred, organizationAddress: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label className={styles.labels} htmlFor="number">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="number"
                aria-describedby="emailHelp"
                placeholder="Enter your phoneNumber"
                value={cred.phoneNumber}
                onChange={(e) => {
                  setcred({ ...cred, phoneNumber: e.target.value });
                }}
              />
            </div>

            <div className="form-group">
              <label className={styles.labels} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                value={cred.email}
                onChange={(e) => {
                  setcred({ ...cred, email: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label className={styles.labels} htmlFor="pass">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="pass"
                aria-describedby="emailHelp"
                placeholder="Enter your password"
                value={cred.password}
                onChange={(e) => {
                  setcred({ ...cred, password: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label className={styles.labels} htmlFor="nid">
                National ID Card Number
              </label>
              <input
                type="number"
                className="form-control"
                id="nid"
                aria-describedby="emailHelp"
                placeholder="Enter your National ID Card Number"
                value={cred.nidNumber}
                onChange={(e) => {
                  setcred({ ...cred, nidNumber: e.target.value });
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
                value={cred.OwnerGender}
                onChange={(e) => {
                  setcred({ ...cred, OwnerGender: e.target.value });
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
            </div>

            <button
              type="submit"
              className="btn btn-bg-for-homechef mt-3"
              onClick={() => {
                handleSignup();
              }}
            >
              Register
            </button>
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
