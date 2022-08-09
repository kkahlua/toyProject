import "./App.css";
import { Row } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";
import Navibar from "./components/Navibar";
import Product from "./components/Product";
function App() {
  let [shoes, setShoes] = useState(data);
  let [imgURL, setImgURL] = useState([
    "https://codingapple1.github.io/shop/shoes1.jpg",
    "https://codingapple1.github.io/shop/shoes2.jpg",
    "https://codingapple1.github.io/shop/shoes3.jpg",
  ]);
  return (
    <div className="App">
      <Navibar />
      <div className="main-bg"></div>
      <Row>
        <Product shoes={shoes} imgURL={imgURL} idx="0" />
        <Product shoes={shoes} imgURL={imgURL} idx="1" />
        <Product shoes={shoes} imgURL={imgURL} idx="2" />
      </Row>
    </div>
  );
}

export default App;
