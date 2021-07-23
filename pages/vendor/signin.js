import styles from "../../styles/VendorSignin.module.css";

import { useState, useEffect } from "react";
import { signinAuthApi, signinAuthApiForVendor } from "../../state/api/auth";
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

    const handleSignin = async () => {
        console.log(cred)
        try {
            const { data } = await signinAuthApiForVendor(cred);
            console.log(data)
            console.log(data.user._id);
            settoken(data.token);
            setid(data.user._id);
            setphoneNumber(data.phoneNumber);
            setusername(data.user.ownerName);
            setemail(data.user.email);
            setisVendor(data.user.status);
            { data.user.status === "false" && router.push("/vendor/waiting") }
            // router.push("/vendor/");
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        localStorage.setItem("token", token);
        localStorage.setItem("vendorID", id);
        localStorage.setItem("userName", username);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("phoneNumber", phoneNumber);
        localStorage.setItem("status", isVendor);
    }, [token, id, username, email, phoneNumber, isVendor]);


  return (
    <div className={styles.container}>
      <div className={`card ${styles.cardLog}`}>
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
