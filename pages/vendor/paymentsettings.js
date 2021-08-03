import Navbar from "../../components/vendor/Navbar";
import Footer from "../../components/vendor/Footer/Footer";
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

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Bank acoount holder name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter here..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Bank Account Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter here..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Bank Routing Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter here..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Change Your Mail
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter here..."
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default paymentsettings;
