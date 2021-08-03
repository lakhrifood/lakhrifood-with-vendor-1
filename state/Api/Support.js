import axios from "axios";
const baseUrl = "https://peaceful-citadel-48843.herokuapp.com/support/";

export const getAllQueryByUserId = async (userId) =>
  await axios.get(`${baseUrl}/user/${userId}`);
export const queryAns = async (supportid, reply) =>
  await axios.patch(`${baseUrl}/reply/and/update/${supportid}`, reply);
export const createQuery = async (data) =>
  await axios.post(`${baseUrl}/add`, data);
// /delete/:id

export const deleteQuery = async (id) =>
  await axios.delete(`${baseUrl}/delete/${id}`);
