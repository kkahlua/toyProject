import { Col } from "react-bootstrap";

function Product(props) {
  return (
    <Col>
      <img src={props.shoes.imgUrl} alt="" width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default Product;
