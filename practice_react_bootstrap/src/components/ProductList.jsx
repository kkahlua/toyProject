import React from "react";
import product1 from "../assets/images/event/products/product1.png";
import product2 from "../assets/images/event/products/product2.png";
import product3 from "../assets/images/event/products/product3.jpeg";
import product4 from "../assets/images/event/products/product4.avif";
import { Card } from "react-bootstrap";
import styles from "../pages/Event_Bootstrap.module.css";

export const productList = [
  {
    img: product1,
    type: "셔츠/블라우스",
    category: "남성의류",
    productName: "데일리 베이직 셔츠 (7color)",
    percent: 50,
    price: 50000,
  },
  {
    img: product2,
    type: "남성 아우터",
    category: "남성의류",
    productName: "스탠다드 블루종 스웨이드 자켓",
    percent: 50,
    price: 100000,
  },
  {
    img: product3,
    type: "치마",
    category: "여성의류",
    productName: "테니스 치마",
    percent: 50,
    price: 25000,
  },
  {
    img: product4,
    type: "냉장고",
    category: "가전제품",
    productName: "스마트 냉장고",
    percent: 50,
    price: 1000000,
  },
];

function ProductList({ currentFilter }) {
  const filteredList = productList.filter((e) => e.category === currentFilter);
  return (
    <div className={styles.top__sales_list}>
      {filteredList.map((e, idx) => (
        <Card style={{ minWidth: 240, borderRadius: 16 }} key={`card_${idx}`}>
          <Card.Img src={e.img} className={styles.product__image} />
          <Card.Body style={{ padding: 0 }}>
            <div className={styles.product}>
              <div className={styles.content}>
                <div>
                  <p>{e.type}</p>
                  <h3>{e.productName}</h3>
                </div>
                <div className={styles.price__layout}>
                  <p className={styles.percent}>{e.percent}%</p>
                  <p className={styles.price}>{e.price.toLocaleString()}원</p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ProductList;
