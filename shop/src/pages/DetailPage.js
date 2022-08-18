/*eslint-disable*/
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage(props) {
  let { id } = useParams();
  let target = props.shoes.find((x) => {
    return x.id == id;
  });
  let [alert, setAlert] = useState(false);
  let [inputValue, setInputValue] = useState("");
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
        <div className="row">
          <div className="col-md-6">
            <img src={target.imgUrl} width="100%" alt="" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{target.title}</h4>
            <p>{target.content}</p>
            <p>{target.price}원</p>
            <input
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              value={inputValue}
            />
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailPage;
