import axios from "axios";

export const getConsumptionDetails = async () => {
  const { data } = await axios.get("http://localhost:3010/consumption-details");
  return data;
};
