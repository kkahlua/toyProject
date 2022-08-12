import Product from "../components/Product";
import { Col, Row, ToggleButton } from "react-bootstrap";
import "../style/mainPage.css";
import { useState } from "react";

function MainPage(props) {
  let [sortSwitch, setSortSwitch] = useState(false);
  let temp = [...props.shoes];
  temp.sort((a, b) => {
    return a.price - b.price;
  });
  console.log(temp);
  return (
    <div className="mainPage">
      <div className="main-bg"></div>
      <div className="sortButton">
        <Row>
          <Col>
            <ToggleButton
              id="toggle-check"
              type="checkbox"
              variant="outline-success"
              checked={sortSwitch}
              value="1"
              size="lg"
              onChange={(e) => setSortSwitch(e.currentTarget.checked)}
            >
              가격 낮은 순
            </ToggleButton>
          </Col>
        </Row>
      </div>
      <Row>
        {props.shoes.map((a, idx) => {
          if (sortSwitch === false) return <Product shoes={props.shoes[idx]} />;
          else return <Product shoes={temp[idx]} />;
        })}
      </Row>
    </div>
  );
}

export default MainPage;
