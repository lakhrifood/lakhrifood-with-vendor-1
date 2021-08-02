import axios from "axios";

export const giveFoodReview = async (userID, productID, rating, orderID) =>
    await axios.patch(`http://localhost:5000/food/rate/food/${ userID }?productID=${ productID }&rating=${ rating }&orderID=${ orderID }`);


export const giveVendorReview = async (userID, businessID, rating, orderID) =>
    await axios.patch(`http://localhost:5000/business/give/rating/${ userID }?businessID=${ businessID }&rating=${ rating }&orderID=${ orderID }`);