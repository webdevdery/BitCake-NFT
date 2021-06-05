import axios from "axios";

export const getArtists = async () => {
  const result = await axios.post(`${process.env.REACT_APP_API_PATH}/api/v1/artist/getall`);
  return result;
};
