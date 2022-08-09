import { Col } from "react-bootstrap";

function Product(props) {
  console.log(props);
  return (
    <Col>
      <img src={props.imgURL[props.idx]} alt="" width="80%" />
      <h4>{props.shoes[props.idx].title}</h4>
      <p>{props.shoes[props.idx].content}</p>
      <p>{props.shoes[props.idx].price}</p>
    </Col>
  );
}

export default Product;
