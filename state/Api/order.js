import axios from "axios";
const baseUrl = "http://localhost:5000/order";

export const CreateOrderApi = async (orderinfo) => {
  axios.post(`${baseUrl}/create`, orderinfo);
};

export const getOrderByUserID = async (userID) =>
  await axios.get(`${baseUrl}/user/${userID}`);