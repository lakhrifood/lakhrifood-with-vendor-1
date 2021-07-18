import axios from "axios";
const baseUrl = "http://localhost:5000/order";

export const CreateOrderApi = async (orderinfo) => {
  axios.post(`${baseUrl}/create`, orderinfo);
};

export const getOrderByUserID = async (userID) =>
  await axios.get(`${baseUrl}/user/${userID}`);

export const getOrderByID = async (ID) =>
  await axios.get(`${baseUrl}/by/order/${ID}`);

export const getOrderDiscountByPromoCode = async (promoCode) =>
  await axios.get(`http://localhost:5000/promo/get/byid/${promoCode}`);
