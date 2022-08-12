import { useParams } from "react-router-dom";

function DetailPage(props) {
  let { id } = useParams();
  let target = props.shoes.find((x) => {
    return x.id == id;
  });
  return (
    <div className="detailPage">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={target.imgUrl} width="100%" alt="" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{target.title}</h4>
            <p>{target.content}</p>
            <p>{target.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
