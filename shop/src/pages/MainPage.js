import Product from "../components/Product";
import { Row } from "react-bootstrap";
import "../style/mainPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MainPage(props) {
  let [dataSwitch, setDataSwitch] = useState(1);
  let [alert, setAlert] = useState(false);
  useEffect(() => {
    if (dataSwitch > 1 && dataSwitch < 4) {
      axios
        .get(`https://codingapple1.github.io/shop/data${dataSwitch}.json`)
        .then((result) => {
          result.data.map((a) => {
            return props.shoes.push(a);
          });
          console.log(props.shoes);
        })
        .catch(() => {
          console.log("실패함");
        });
    } else if (dataSwitch > 3) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  }, [dataSwitch, props.shoes]);
  return (
    <div className="mainPage">
      <div className="main-bg"></div>
      {alert == true ? (
        <div className="alert alert-danger">
          상품이 더이상 존재하지 않습니다.
        </div>
      ) : null}
      {/* <Row>
        {props.shoes.map((a, idx) => {
          if (sortSwitch === false)
            return (
              <Product shoes={props.shoes[idx]} key={props.shoes[idx].title} />
            );
          else return <Product shoes={temp[idx]} key={temp[idx].title} />;
        })}
      </Row> */}
      {props.shoes.map((a, idx) => {
        if (idx % 3 === 0)
          return (
            <Row>
              <Product shoes={props.shoes[idx]} key={props.shoes[idx].title} />
              <Product
                shoes={props.shoes[idx + 1]}
                key={props.shoes[idx + 1].title}
              />
              <Product
                shoes={props.shoes[idx + 2]}
                key={props.shoes[idx + 2].title}
              />
            </Row>
          );
        else return null;
      })}
      <button
        onClick={() => {
          setDataSwitch(dataSwitch + 1);
        }}
      >
        더보기
      </button>
    </div>
  );
}

export default MainPage;
