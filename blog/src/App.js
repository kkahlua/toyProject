import moment from "moment";
import "moment/locale/ko";
import { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState([
    "나는 사랑이 필요해",
    "그만큼 아프면 충분해",
    "네가 핀 담배만큼 난 울었어",
  ]);
  let [like, setLike] = useState(
    title.map(() => {
      return 0;
    })
  );
  let [modal, setModal] = useState(false);
  let [modalIndex, setModalIndex] = useState(-1);
  let [inputValue, setInputValue] = useState("");
  let [date, setDate] = useState(
    title.map(() => {
      const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
      return nowTime;
    })
  );
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      {title.map((a, idx) => {
        return (
          <div className="list" key={idx}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalIndex(idx);
              }}
            >
              {title[idx]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[idx] = copy[idx] + 1;
                  setLike(copy);
                }}
              >
                👍
              </span>{" "}
              {like[idx]}
              <button
                className="deleteButton"
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...title];
                  copy.splice(idx, 1);
                  setTitle(copy);
                }}
              >
                ❌
              </button>
            </h4>
            <p>{date[idx]}</p>
          </div>
        );
      })}
      {modal === true ? <Modal title={title} modalIndex={modalIndex} /> : null}
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      ></input>
      <button
        onClick={() => {
          if (inputValue.length > 0) {
            let temp = [...title, inputValue];
            let tempLike = [...like, 0];
            const time = moment().format("YYYY-MM-DD HH:mm:ss");
            let timeTemp = [...date, time];
            setTitle(temp);
            setLike(tempLike);
            setInputValue("");
            setDate(timeTemp);
          }
        }}
      >
        🔎
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.title[props.modalIndex]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
    </>
  );
}
export default App;
