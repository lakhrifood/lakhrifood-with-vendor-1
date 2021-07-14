import axios from "axios";

export const getAllFood = async () =>
  await axios.get("http://localhost:5000/food/all");

export const getByCategoryFood = async (category) =>
  await axios.get(`http://localhost:5000/food/category/${category}`);

export const getByRatingFood = async (rating) =>
  await axios.get(`http://localhost:5000/food/rating?rating=${rating}`);
