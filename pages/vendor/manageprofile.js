import React, { useEffect, useState } from "react";
import Navbar from "../../components/vendor/Navbar";
import Footer from '../../components/vendor/Footer/Footer';
import axios from "axios";
import { useRouter } from "next/router";
const Manageprofile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [dep, setDep] = useState(null)
  const [user, setuser] = useState({});
  const getUserProfile = async () => {
    const { data } = await axios.get(
      `https://peaceful-citadel-48843.herokuapp.com/business/one/${ localStorage.getItem("vendorID") }`
    );
    console.log(data, "mycat");
    setuser(data);
  };


  // upload or edit image
  const postCloudImage = (image) => {
    document.getElementById('submitBTN').setAttribute('disabled', 'disabled');
    document.getElementById('submitBTN').innerText = "Image Uploading!!"
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "rentahome");
    data.append("cloud_name", "dfvtfwt6f");
    fetch("https://api.cloudinary.com/v1_1/dfvtfwt6f/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url, "mycat");
        setUserData({ ...userData, imgURL: data.url });
        document.getElementById('submitBTN').removeAttribute('disabled');
        document.getElementById('submitBTN').innerText = "Save"
      })
      .catch((err) => {
        console.log(err, "mycat");
      });
  };

  const handleUpdate = async () => {
    console.log(userData, "Success catti")
    try {
      const { data } = await axios.patch(`https://peaceful-citadel-48843.herokuapp.com/auth/business/edit/${ localStorage.getItem("vendorID") }`, userData);
      console.log(data, "Success edit")
      setDep(data);
      router.push('/vendor/profile')
    } catch (err) {
      console.log(err, "Success edit");
    }
  }


  useEffect(() => {
    getUserProfile();
  }, [dep]);
  return (
    <div>
      <Navbar />

      <div className="backgroundAsh pt-5 pb-5">
        <div className="container">
          <h1 className={`h3`}>Manage Profile</h1>

          <div className="mb-3">
            <label htmlFor="ownerName" className="form-label">
              Your name
            </label>
            <input
              type="text"
              defaultValue={user && user.ownerName}
              className="form-control"
              id="ownerName"
              placeholder="Enter here..."
              onChange={(e) => {
                setUserData({ ...userData, ownerName: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Photo
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={(e) => {
                postCloudImage(e.target.files[0]);
              }} />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Your phone number
            </label>
            <input
              type="text"
              defaultValue={user && user.phoneNumber}
              className="form-control"
              id="phoneNumber"
              placeholder="Enter here..."
              onChange={(e) => {
                setUserData({ ...userData, phoneNumber: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              defaultValue={user && user.email}
              className="form-control"
              id="email"
              placeholder="Enter here..."
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Shop name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="organizationAddress" className="form-label">
              Shop Address
            </label>
            <input
              type="text"
              defaultValue={user && user.organizationAddress}
              className="form-control"
              id="organizationAddress"
              placeholder="Enter here..."
              onChange={(e) => {
                setUserData({ ...userData, organizationAddress: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bio" className="form-label">
              Bio
            </label>
            <input
              type="text"
              defaultValue={user && user.bio}
              className="form-control"
              id="bio"
              placeholder="Enter here..."
              onChange={(e) => {
                setUserData({ ...userData, bio: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              placeholder="Enter here..."
              defaultValue={user && user.description}
              onChange={(e) => {
                setUserData({ ...userData, description: e.target.value });
              }}
              rows="3"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">
              Selected Payment Method
            </label>
            <select
              id='paymentMethod'
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setUserData({ ...userData, paymentMethod: e.target.value });
              }}
            >
              <option selected>Select Payment Method</option>
              <option value="Bkash">Bkash</option>
              <option value="DBBL">DBBL</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Account holder name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
              defaultValue={user && user.paymentReceiver}
              onChange={(e) => {
                setUserData({ ...userData, paymentReceiver: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Account Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
              defaultValue={user && user.paymentDetails}
              onChange={(e) => {
                setUserData({ ...userData, paymentDetails: e.target.value });
              }}
            />
          </div>

          {/* <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Your password
            </label>
            <input
              type="password"
              defaultValue={user && user.password}
              className="form-control"
              id="password"
              placeholder="Enter here..."
            />
          </div> */}

          <div className="col-auto">
            <button
              onClick={() => handleUpdate()}
              type="submit"
              id="submitBTN"
              className="btn btn-primary mb-3">
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Manageprofile;
