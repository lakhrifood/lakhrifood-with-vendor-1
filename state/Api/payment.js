import axios from "axios"


export const getBalance = async (vendorID, status) =>
    await axios.get(`http://localhost:5000/payment/vendor/by/status?id=${ vendorID }&status=${ status }`);

export const getPaymentHistory = async (vendorID) =>
    await axios.get(`http://localhost:5000/payment/vendor/history?id=${ vendorID }`);

export const makeWithdraw = async (vendorID) =>
    await axios.patch(`http://localhost:5000/payment/make/withdraw?id=${ vendorID }`);
