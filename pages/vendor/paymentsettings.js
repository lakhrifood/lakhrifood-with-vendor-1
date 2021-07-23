const { default: Footer } = require("@/components/vendor/Footer/footer");
const { default: Navbar } = require("@/components/vendor/Navbar");
import { Switch } from "@chakra-ui/react";
import { FormControl, FormLabel, Flex } from "@material-ui/core";
const paymentsettings = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h1 className={`h3`}>Shop Settings</h1>
        <div className="columns">
          <div className="row ml-10">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-alerts" mb="0">
                Cash payment
              </FormLabel>
              <Switch id="email-alerts" />
            </FormControl>
          </div>
          <div className="row ml-10">
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="email-alerts" mb="0">
                Bank payment
              </FormLabel>
              <Switch id="email-alerts" />
            </FormControl>
          </div>
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Bank acoount holder name
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
            Bank Account Number
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
            Bank Routing Number
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
            Change Your Mail
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter here..."
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default paymentsettings;
