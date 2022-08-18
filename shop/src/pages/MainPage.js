import Product from "../components/Product";
import { Col, Row, ToggleButton } from "react-bootstrap";
import "../style/mainPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MainPage(props) {
  let [sortSwitch, setSortSwitch] = useState(false);
  let [dataSwitch, setDataSwitch] = useState(false);
  let temp = [...props.shoes];
  temp.sort((a, b) => {
    return a.price - b.price;
  });
  useEffect(() => {
    if (dataSwitch === true) {
      axios
        .get("https://codingapple1.github.io/shop/data2.json")
        .then((result) => {
          result.data.map((a) => {
            props.shoes.push(a);
          });
          console.log(props.shoes);
        })
        .catch(() => {
          console.log("실패함");
        });
    }
  }, [dataSwitch]);
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
          if (sortSwitch === false)
            return (
              <Product shoes={props.shoes[idx]} key={props.shoes[idx].title} />
            );
          else return <Product shoes={temp[idx]} key={temp[idx].title} />;
        })}
      </Row>
      <button
        onClick={() => {
          setDataSwitch(true);
        }}
      >
        더보기
      </button>
    </div>
  );
}

export default MainPage;
