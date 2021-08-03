import axios from "axios"


export const getBalance = async (vendorID, status) =>
    await axios.get(`https://peaceful-citadel-48843.herokuapp.com/payment/vendor/by/status?id=${ vendorID }&status=${ status }`);

export const getPaymentHistory = async (vendorID) =>
    await axios.get(`https://peaceful-citadel-48843.herokuapp.com/payment/vendor/history?id=${ vendorID }`);

export const makeWithdraw = async (vendorID) =>
    await axios.patch(`https://peaceful-citadel-48843.herokuapp.com/payment/make/withdraw?id=${ vendorID }`);
