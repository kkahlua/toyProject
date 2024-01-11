import "./index.scss";
import axios from "axios";

const getPosts = async () => {
  const data = await axios.get("http://localhost:3010/posts");
  console.log(data);
  return data;
};

getPosts();
