import axios from "axios";

export const giveFoodReview = async (userID, productID, rating, orderID) =>
    await axios.patch(`https://peaceful-citadel-48843.herokuapp.com/food/rate/food/${ userID }?productID=${ productID }&rating=${ rating }&orderID=${ orderID }`);


export const giveVendorReview = async (userID, businessID, rating, orderID) =>
    await axios.patch(`https://peaceful-citadel-48843.herokuapp.com/business/give/rating/${ userID }?businessID=${ businessID }&rating=${ rating }&orderID=${ orderID }`);