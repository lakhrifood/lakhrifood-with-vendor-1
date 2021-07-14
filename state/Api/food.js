import axios from "axios";

export const getAllFood = async () =>
  await axios.get("http://localhost:5000/food/all");

export const getByCategoryFood = async (category) =>
  await axios.get(`http://localhost:5000/food/category/${category}`);

export const getByRatingFood = async (rating) =>

    await axios.get(`http://localhost:5000/food/rating?rating=${ rating }`);

export const getByIDFood = async (id) =>
    await axios.get(`http://localhost:5000/food/${ id }`);


export const getByPriceFilter = async (priceFrom, priceTo) =>
    await axios.get(`http://localhost:5000/food/filter/byprice?priceFrom=${ priceFrom }&priceTo=${ priceTo }`);

export const getBySearch = async (params) =>
    await axios.get(`http://localhost:5000/food/search/product/byuser?params=${ params }`)

export const getPopularProduct = async () =>
    await axios.get("http://localhost:5000/food/popular/items");

export const getRecommendedProduct = async () =>
    await axios.get("http://localhost:5000/food/recommended/items");

