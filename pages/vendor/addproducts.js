const { default: Footer } = require("@/components/vendor/Footer/footer");
const { default: Navbar } = require("@/components/vendor/Navbar");
import { Switch } from "@chakra-ui/react";
import { FormControl, FormLabel, Flex } from "@material-ui/core";
const addproducts = () => {
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
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Category
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              unit
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
            />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Photo
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Price
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
            />
          </div>
          <div className="row ml-10">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-alerts" mb="0">
                Stock Availability
              </FormLabel>
              <Switch id="email-alerts" />
            </FormControl>
          </div>
          <div className="row ml-10">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-alerts" mb="0">
                Stock Availability
              </FormLabel>
              <Switch id="email-alerts" />
            </FormControl>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Description
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">
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
