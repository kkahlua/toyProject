import axios from "axios";

export const addCurrentAsset = async (value) => {
  await axios.post("http://localhost:3010/current-asset", {
    price: value,
  });
};
