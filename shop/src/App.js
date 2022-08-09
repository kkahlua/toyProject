import "./App.css";
import { Row } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";
import Navibar from "./components/Navibar";
import Product from "./components/Product";
function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navibar />
      <div className="main-bg"></div>
      <Row>
        {shoes.map((a, idx) => {
          return <Product shoes={shoes[idx]} />;
        })}
      </Row>
    </div>
  );
}

export default App;
