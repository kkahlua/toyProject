import React from "react";
import ProductList from "./ProductList";
import styles from "../pages/Event.module.css";

function EventProductSection() {
  return (
    <section>
      <ul className={styles.filter__list}>
        <li className={styles.filter__btn}>남성의류</li>
        <li className={styles.filter__btn}>여성의류</li>
        <li className={styles.filter__btn}>가전제품</li>
      </ul>
      <div className={styles.top__sales}>
        <h2>실시간 인기 TOP 5</h2>
        <ProductList />
        <button className={styles.show__all__btn}>전체 상품 보기</button>
      </div>
    </section>
  );
}

export default EventProductSection;
