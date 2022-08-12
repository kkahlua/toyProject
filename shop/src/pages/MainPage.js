import Product from "../components/Product";
import { Row } from "react-bootstrap";

function MainPage(props) {
  return (
    <div className="mainPage">
      <div className="main-bg"></div>
      <Row>
        {props.shoes.map((a, idx) => {
          return <Product shoes={props.shoes[idx]} />;
        })}
      </Row>
    </div>
  );
}

export default MainPage;
