import styles from "../../styles/Auth.module.css";
import { useState } from "react";
import { SignupAction } from "../../state/action/AuthAction";
import { useDispatch } from "react-redux";
const signup = () => {
  const dispatch = useDispatch();
  const [cred, setcred] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    authenticationType: "normal",
    address: "",
    gender: "",
    division: "",
    city: "",
    country: "bangladesh",
  });
  const handleSignup = async () => {
    dispatch(SignupAction(cred));
  };
  return (
    <div className={styles.containerSignup}>
      <div className={`card ${styles.cardLogSignup}`}>
        <div className={styles.cardInput}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
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
            <label for="exampleInputPassword1">Password</label>
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
          <div className="form-group">
            <label for="exampleInputEmail1">name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              value={cred.name}
              onChange={(e) => {
                setcred({ ...cred, name: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">phoneNumber</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter phoneNumber"
              value={cred.phoneNumber}
              onChange={(e) => {
                setcred({ ...cred, phoneNumber: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter address"
              value={cred.address}
              onChange={(e) => {
                setcred({ ...cred, address: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Gender</label>
            <select
              class="form-select"
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
            <label for="exampleInputEmail1">Division</label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={cred.division}
              onChange={(e) => {
                setcred({ ...cred, division: e.target.value });
              }}
            >
              <option value="Khulna">Khulna </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rajshahi">Rajshahi</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">city</label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={cred.city}
              onChange={(e) => {
                setcred({ ...cred, city: e.target.value });
              }}
            >
              <option value="Khulna">Khulna </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rajshahi">Rajshahi</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              handleSignup();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default signup;
