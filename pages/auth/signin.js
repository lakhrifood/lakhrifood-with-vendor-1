import styles from "../../styles/Auth.module.css";

import { useState, useEffect } from "react";
import { signinAuthApi } from "../../state/Api/Auth";
import { setAuthTrue } from "../../state/reducers/UserAuth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
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

  const handleSignin = async () => {
    try {
      const { data } = await signinAuthApi(cred);
      console.log(data.user._id);
      settoken(data.token);
      setid(data.user._id);
      setusername(data.user.name);
      setemail(data.user.email);
      dispatch(setAuthTrue());
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", id);
    localStorage.setItem("userName", username);
    localStorage.setItem("userEmail", email);
  }, [token, id, username, email]);

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
            className="btn btn-primary"
            onClick={() => {
              handleSignin();
            }}
          >
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

export default Signin;
