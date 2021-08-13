import axios from "axios";
const baseUrl = "https://peaceful-citadel-48843.herokuapp.com/order";

export const CreateOrderApi = async (orderinfo) => {
  axios.post(`${ baseUrl }/create`, orderinfo);
};

export const getOrderByUserID = async (userID) =>
  await axios.get(`${ baseUrl }/user/${ userID }`);

export const getOrderByID = async (ID) =>
  await axios.get(`${ baseUrl }/by/order/${ ID }`);


export const getOrderDiscountByPromoCode = async (promoCode, userID) =>
  await axios.get(`https://peaceful-citadel-48843.herokuapp.com/promo/get/promo?promoCode=${ promoCode }&userID=${ userID }`);

export const getTotalSales = async (vendorID) =>
  await axios.get(`https://peaceful-citadel-48843.herokuapp.com/payment/total/sales?vendorID=${ vendorID }`);
