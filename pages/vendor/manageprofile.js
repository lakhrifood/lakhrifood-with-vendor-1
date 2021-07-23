import React from "react";
const { default: Footer } = require("@/components/vendor/Footer/footer");
const { default: Navbar } = require("@/components/vendor/Navbar");
const manageprofile = () => {
  return (
    <div>
      <Navbar />

      <div className="backgroundAsh container100vh">
        <div className="container">
          <h1 className={`h3`}>Manage Profile</h1>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Your name
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
              Your phone number
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
              Your Address
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
              Your password
            </label>
            <input
              type="password"
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
      </div>
      <Footer />
    </div>
  );
};

export default manageprofile;
