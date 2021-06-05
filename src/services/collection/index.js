import axios from "axios";

export const getCollections = async (id) => {
  const result = await axios.post(`${process.env.REACT_APP_API_PATH}/api/v1/collection/getall`, { id: id });
  return result;
};
