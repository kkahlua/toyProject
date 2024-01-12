import axios from "axios";

export const addConsumptionDetail = async (body) => {
  const { data } = await axios.post(
    "http://localhost:3010/consumption-details",
    body
  );
  return data;
};
