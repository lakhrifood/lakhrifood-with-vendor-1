import axios from "axios";

export const getAllFood = async () =>
    await axios.get("http://localhost:5000/food/all");