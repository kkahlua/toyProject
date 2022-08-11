import Product from "../components/Product";
import { Row } from "react-bootstrap";
import data from "../data";
import { useState } from "react";
function MainPage() {
  let [shoes] = useState(data);
  return (
    <div className="mainPage">
      <div className="main-bg"></div>
      <Row>
        {shoes.map((a, idx) => {
          return <Product shoes={shoes[idx]} />;
        })}
      </Row>
    </div>
  );
}

export default MainPage;
