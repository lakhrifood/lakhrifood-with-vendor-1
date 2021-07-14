import axios from "axios";

export const getAllHomechefData = async (pageNumber) =>
    await axios.get(`https://peaceful-citadel-48843.herokuapp.com/business/fromuser/Vendor&true?page=${ pageNumber }`);

export const getHomechefByID = async (id) =>
    await axios.get(`https://peaceful-citadel-48843.herokuapp.com/business/one/${ id }`);

export const getPopularVendor = async () =>
    await axios.get(`https://peaceful-citadel-48843.herokuapp.com/business/popular/business?type=Vendor`);