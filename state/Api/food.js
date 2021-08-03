import axios from "axios";

export const getAllFood = async () =>
  await axios.get("https://peaceful-citadel-48843.herokuapp.com/food/all");

export const getByCategoryFood = async (category) =>
  await axios.get(
    `https://peaceful-citadel-48843.herokuapp.com/food/category/${ category }`
  );

export const getByRatingFood = async (rating) =>
  await axios.get(
    `https://peaceful-citadel-48843.herokuapp.com/food/rating?rating=${ rating }`
  );

export const getByIDFood = async (id) =>
  await axios.get(`https://peaceful-citadel-48843.herokuapp.com/food/${ id }`);

export const getByPriceFilter = async (priceFrom, priceTo) =>
  await axios.get(
    `https://peaceful-citadel-48843.herokuapp.com/food/filter/byprice?priceFrom=${ priceFrom }&priceTo=${ priceTo }`
  );

export const getBySearch = async (params) =>
  await axios.get(
    `https://peaceful-citadel-48843.herokuapp.com/food/search/product/byuser?params=${ params }`
  );

export const getPopularProduct = async () =>
  await axios.get(
    "https://peaceful-citadel-48843.herokuapp.com/food/popular/items"
  );

export const getRecommendedProduct = async () =>
  await axios.get(
    "https://peaceful-citadel-48843.herokuapp.com/food/recommended/items"
  );


export const getByVendorIDFood = async (vendorID) =>
  await axios.get(`https://peaceful-citadel-48843.herokuapp.com/food/vendor/${ vendorID }`);

// delete food by id
export const deleteFood = async (id) =>
  await axios.delete(`https://peaceful-citadel-48843.herokuapp.com/food/delete/${ id }`);

// publish or unpublish food by id
export const publishFood = async (id) =>
  await axios.patch(`https://peaceful-citadel-48843.herokuapp.com/food/publish/or/unpublish?productID=${ id }`);