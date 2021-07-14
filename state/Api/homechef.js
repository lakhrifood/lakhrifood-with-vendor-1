import axios from "axios";

export const getAllHomechefData = async (pageNumber) =>
    await axios.get(`http://localhost:5000/business/fromuser/Vendor&true?page=${ pageNumber }`);

export const getHomechefByID = async (id) =>
    await axios.get(`http://localhost:5000/business/one/${ id }`);

export const getPopularVendor = async () =>
    await axios.get(`http://localhost:5000/business/popular/business?type=Vendor`);