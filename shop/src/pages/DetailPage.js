/*eslint-disable*/
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";
import "../style/detailPage.css";
function DetailPage(props) {
  let { id } = useParams();
  let target = props.shoes.find((x) => {
    return x.id == id;
  });
  let [alert, setAlert] = useState(false);
  let [inputValue, setInputValue] = useState("");
  function productComponent() {}
  useEffect(() => {
    if (isNaN(inputValue)) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  }, [inputValue]);
  return (
    <div className="detailPage">
      <div className="container">
        {alert == true ? (
          <div className="alert alert-danger">수량을 잘못 입력하였습니다.</div>
        ) : null}
        <Row className="productComponent">
          <Col>
            <img src={target.imgUrl} width="100%" alt="" />
          </Col>
          <Col className="detailDescription">
            <h3>{target.title}</h3>
            <p>{target.content}</p>
            <p>{target.price}원</p>
            <input
              className="productInput"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              value={inputValue}
            />
            <button className="btn btn-danger">주문하기</button>
          </Col>
        </Row>
        <TapComponent />
      </div>
    </div>
  );
}
function TapComponent() {
  let [productTap, setProductTap] = useState(0);
  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setProductTap(0);
            }}
            eventKey="link-0"
          >
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setProductTap(1);
            }}
            eventKey="link-1"
          >
            리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setProductTap(2);
            }}
            eventKey="link-2"
          >
            질문
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setProductTap(3);
            }}
            eventKey="disabled"
          >
            반품, 교환정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent productTap={productTap} />;
    </>
  );
}
function TabContent(props) {
  if (props.productTap === 0) {
    return <div>상세정보</div>;
  } else if (props.productTap === 1) {
    return <div>리뷰</div>;
  } else if (props.productTap === 2) {
    return <div>질문</div>;
  } else if (props.productTap === 3) {
    return <div>반품 및 교환</div>;
  }
}
export default DetailPage;
