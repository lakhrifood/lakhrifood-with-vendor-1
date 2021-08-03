import Image from "next/image";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { giveFoodReview, giveVendorReview } from "../../state/Api/review";

function ReviewModal({ vendorID, productID, orderID }) {
  console.log(vendorID, productID, orderID, "ReviewModal");

  const [masgOfFood, setMasgOfFood] = useState(null);
  const [masgOfVendor, setMasgOfVendor] = useState(null);
  const reviewOfVendor = {
    size: 40,
    edit: true,
    value: 0,
    onChange: async (newValue) => {
      const { data } = await giveVendorReview(
        localStorage.getItem("userId"),
        vendorID,
        newValue,
        orderID
      );
      console.log(data);
      setMasgOfVendor(data.message);
    },
  };

  const reviewOfProduct = {
    size: 40,
    edit: true,
    value: 0,
    onChange: async (newValue) => {
      const { data } = await giveFoodReview(
        localStorage.getItem("userId"),
        productID,
        newValue,
        orderID
      );
      console.log(data);
      setMasgOfFood(data.message);
    },
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column justify-content-center align-items-center pt-4 pb-4">
              <h1 className="text-center">Review Of This Product</h1>
              <ReactStars {...reviewOfProduct} />
              {masgOfFood && (
                <h1 className="text-center text-danger">{masgOfFood}</h1>
              )}
              <h1 className="text-center">Review Of This Vendor</h1>
              <ReactStars {...reviewOfVendor} />
              {masgOfVendor && (
                <h1 className="text-center text-danger">{masgOfVendor}</h1>
              )}
            </div>
          </div>
          {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
