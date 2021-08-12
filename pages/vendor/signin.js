import styles from "../../styles/VendorSignin.module.css";

import { useState, useEffect } from "react";
import { signinAuthApiForVendor } from "../../state/Api/auth";
import { setAuthTrue } from "../../state/reducers/UserAuth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Link from "next/link";
const Signin = () => {
  const dispatch = useDispatch();
  const [cred, setcred] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [token, settoken] = useState("");
  const [id, setid] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [isVendor, setisVendor] = useState("");
  const [dep, setDep] = useState(null)

  const handleSignin = async () => {
    console.log(cred);
    try {
      const { data } = await signinAuthApiForVendor(cred);
      await settoken(data.token);
      await setid(data.user._id);
      await setphoneNumber(data.phoneNumber);
      await setusername(data.user.ownerName);
      await setemail(data.user.email);
      await setisVendor(data.user.status);
      await localStorage.setItem("vtoken", token);
      await localStorage.setItem("vendorID", id);
      await localStorage.setItem("vName", username);
      await localStorage.setItem("vEmail", email);
      await localStorage.setItem("vphoneNumber", phoneNumber);
      await localStorage.setItem("status", isVendor);
      setDep(data);
      // router.push("/vendor/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    {
      localStorage.getItem("vtoken") !== "" &&
        data.user.status === "false"
        ? router.push("/vendor/waiting")
        : router.push("/vendor/dashboard")
    }
  }, [dep]);

  return (
    <div className={styles.container}>
      <div className={`card ${ styles.cardLog }`}>
        <div className={styles.header}>
          <h1>Welcome !</h1>
          <p>Sign Up or Login to Continue.</p>
        </div>
        <div className={styles.cardInput}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
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
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={cred.password}
              onChange={(e) => {
                setcred({ ...cred, password: e.target.value });
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-bg-for-homechef"
            onClick={() => {
              handleSignin();
            }}
          >
            Submit
          </button>
          <p className="text-center">
            Dont have an account?{" "}
            <strong className="text-color">
              {" "}
              <Link href="/vendor/signup">Sign up</Link>
            </strong>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
