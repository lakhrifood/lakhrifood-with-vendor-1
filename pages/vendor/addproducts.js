const { default: Footer } = require("@/components/vendor/Footer/footer");
const { default: Navbar } = require("@/components/vendor/Navbar");
import { Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, FormLabel, Flex } from "@material-ui/core";
const addproducts = () => {
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
      .get("http://localhost:5000/catagory")
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
    axios.post("http://localhost:5000/food/add", product).then(() => {
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
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
              onChange={(e) => {
                setproduct({ ...product, name: e.target.value });
              }}
            />
          </div>
          <div class="mb-3">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setproduct({ ...product, category: e.target.value });
              }}
            >
              <option selected>Select Category</option>
              {catagories.map((cat) => (
                <option value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              unit
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
              onChange={(e) => {
                setproduct({ ...product, totalQuantity: e.target.value });
              }}
            />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Photo
            </label>
            <input
              class="form-control"
              type="file"
              id="formFile"
              onChange={(e) => {
                postCloudImage(e.target.files[0]);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Price
            </label>
            <input
              type="number"
              class="form-control"
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

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Description
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => {
                setproduct({ ...product, description: e.target.value });
              }}
            ></textarea>
          </div>
          <div class="col-auto">
            <button
              type="submit"
              class="btn btn-primary mb-3"
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

export default addproducts;
