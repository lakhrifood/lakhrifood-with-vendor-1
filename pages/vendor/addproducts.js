import Navbar from "../../components/vendor/Navbar";
import Footer from '../../components/vendor/Footer/Footer';
import { Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, FormLabel, Flex } from "@material-ui/core";
const Addproducts = () => {
  const [product, setproduct] = useState({
    name: "",
    category: "",
    imgURL: "",
    price: 0,
    totalQuantity: 0,
    productStatus: "active",
    description: "",
    vendorID: "",
  });
  const [catagories, setcatagories] = useState([]);
  const getCatagories = () => {
    axios
      .get("https://peaceful-citadel-48843.herokuapp.com/catagory")
      .then((response) => {
        setcatagories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const postCloudImage = (image) => {
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
        console.log(data, "mycat");
        setproduct({ ...product, imgURL: data.url });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    console.log(product, "success mycat");
    axios.post("https://peaceful-citadel-48843.herokuapp.com/food/add", product).then(() => {
      console.log("success mycat");
    });
  };

  useEffect(() => {
    setproduct({ ...product, vendorID: localStorage.getItem("vendorID") });
    getCatagories();
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="backgroundAsh ">
        <div className="container">
          <h1 className={`h3`}>Add products</h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
              onChange={(e) => {
                setproduct({ ...product, name: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setproduct({ ...product, category: e.target.value });
              }}
            >
              <option selected>Select Category</option>
              {catagories.map((cat, i) => (
                <option key={i} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              unit
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
              onChange={(e) => {
                setproduct({ ...product, totalQuantity: e.target.value });
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
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
              onChange={(e) => {
                setproduct({ ...product, price: e.target.value });
              }}
            />
          </div>
          {/* <div className="row ml-10">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-alerts" mb="0">
                Stock Availability
              </FormLabel>
              <Switch id="email-alerts" />
            </FormControl>
          </div> */}

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => {
                setproduct({ ...product, description: e.target.value });
              }}
            ></textarea>
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Addproducts;
