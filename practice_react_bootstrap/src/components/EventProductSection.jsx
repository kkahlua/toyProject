import React, { useState } from "react";
import ProductList from "./ProductList";
import styles from "../pages/Event.module.css";

function EventProductSection() {
  const [currentFilter, setCurrentFilter] = useState("남성의류");
  const handleCurrnetFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };
  return (
    <section>
      <ul className={styles.filter__list}>
        <li
          className={styles.filter__btn}
          data-active={currentFilter === "남성의류"}
          onClick={() => handleCurrnetFilter("남성의류")}
        >
          남성의류
        </li>
        <li
          className={styles.filter__btn}
          data-active={currentFilter === "여성의류"}
          onClick={() => handleCurrnetFilter("여성의류")}
        >
          여성의류
        </li>
        <li
          className={styles.filter__btn}
          data-active={currentFilter === "가전제품"}
          onClick={() => handleCurrnetFilter("가전제품")}
        >
          가전제품
        </li>
      </ul>
      <div className={styles.top__sales}>
        <h2>실시간 인기 TOP 5</h2>
        <ProductList currentFilter={currentFilter} />
        <button className={styles.show__all__btn}>전체 상품 보기</button>
      </div>
    </section>
  );
}

export default EventProductSection;
