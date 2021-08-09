import Navbar from "../../components/vendor/Navbar";
import Footer from "../../components/vendor/Footer/Footer";
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

  console.log(product, "mycat");
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
    document.getElementById("submit").innerHTML = "Uploading Image...";
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
        document.getElementById("submit").innerHTML = "Save";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    console.log(product, "success mycat");
    axios.post("https://peaceful-citadel-48843.herokuapp.com/food/add", product).then(() => {
      console.log("success mycat");
      document.getElementById("addProduct").reset();
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
        <div className="container pt-5 pb-5">
          <h1 className={`h3`}>Add products</h1>
          <form id="addProduct" action="">
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
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
                  <option key={i} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="totalQuantity" className="form-label">
                unit
              </label>
              <input
                type="number"
                className="form-control"
                id="totalQuantity"
                placeholder="Enter here..."
                onChange={(e) => {
                  setproduct({
                    ...product,
                    totalQuantity: parseInt(e.target.value),
                  });
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
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Enter here..."
                onChange={(e) => {
                  setproduct({ ...product, price: parseInt(e.target.value) });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Discounted price(Optional)
              </label>
              <input
                type="number"
                className="form-control"
                id="Discounted price"
                placeholder="Enter here..."
                onChange={(e) => {
                  setproduct({
                    ...product,
                    discountPrice: parseInt(e.target.value),
                  });
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
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
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
              {product.name &&
              product.description &&
              product.price &&
              product.totalQuantity &&
              product.category ? (
                <button
                  id="submit"
                  type="button"
                  className="btn btn-primary mb-3"
                  onClick={() => handleSubmit()}
                >
                  Save
                </button>
              ) : (
                <button
                  disabled
                  id="submit"
                  type="button"
                  className="btn btn-primary mb-3"
                >
                  Save
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Addproducts;
