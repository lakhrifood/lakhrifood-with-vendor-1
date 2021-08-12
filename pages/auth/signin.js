import styles from "../../styles/Auth.module.css";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { setAuthTrue } from "../../state/reducers/UserAuth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import Link from "next/link";
import { signinAuthApi, signInFacebookApi, signInGoogleApi } from "../../state/Api/auth";
import FacebookAuth from 'react-facebook-auth';

const MyFacebookButton = ({ onClick }) => (
  <button onClick={onClick} type="button" className="btn btn-outline-primary">
    <p className={styles.btnTxt}>
      {" "}
      <i className="fab fa-facebook"></i> Continue With Facebook
    </p>
  </button>
);

const Signin = () => {

  const authenticateWithFacebook = async (response) => {
    const { name, email, accessToken, picture } = response;
    const res = await signInFacebookApi(accessToken, name, email, picture.data.url);
    settoken(res.data.token);
    setid(res.data.user._id);
    setphoneNumber(res.data.phoneNumber);
    setusername(res.data.user.name);
    setemail(res.data.user.email);
    dispatch(setAuthTrue());
    router.push("/");
  };

  const dispatch = useDispatch();
  const responseGoogle = async (response) => {
    var decoded = jwt_decode(response.tokenId);
    console.log(response, "respdo");
    const res = await signInGoogleApi(response.tokenId);
    settoken(res.data.token);
    setid(res.data.user._id);
    setphoneNumber(res.data.phoneNumber);
    setusername(res.data.user.name);
    setemail(res.data.user.email);
    dispatch(setAuthTrue());
    router.push("/");
  };

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

  const handleSignin = async () => {
    try {
      const { data } = await signinAuthApi(cred);
      console.log(data, "my lakhriphone");
      settoken(data.token);
      setid(data.user._id);
      setphoneNumber(data.phoneNumber);
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
    localStorage.setItem("phoneNumber", phoneNumber);
  }, [token, id, username, email, phoneNumber]);

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
            className="btn btn-primary"
            onClick={() => {
              handleSignin();
            }}
          >
            Submit
          </button>
          <FacebookAuth
            appId="1161606900995726"
            callback={authenticateWithFacebook}
            component={MyFacebookButton}
          />
          <h1 className="text-center">
            <strong>Or</strong>
          </h1>
          <GoogleLogin
            // clientId="66555235728-td9c4vhn0nithkrscgc66j2g4gtgq2uk.apps.googleusercontent.com"
            clientId="66555235728-td9c4vhn0nithkrscgc66j2g4gtgq2uk.apps.googleusercontent.com"
            buttonText="Continue With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          {/* <button type="button" className="btn btn-outline-danger">
            <p className={styles.btnTxt}>
              <i className="fab fa-google mr-10"></i>Continue With Google
            </p>
          </button> */}
          <p className="text-center">
            Dont have an account?{" "}
            <strong className="text-color">
              {" "}
              <Link href="/auth/signup">Sign up</Link>
            </strong>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
