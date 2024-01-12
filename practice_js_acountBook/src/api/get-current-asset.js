import axios from "axios";

export const getCurrentAsset = async () => {
  const { data } = await axios.get("http://localhost:3010/current-asset");
  return data;
};
