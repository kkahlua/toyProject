import React from "react";
import styles from "../pages/Event.module.css";
import arrow_left from "../assets/icons/arrow_left.svg";
import share from "../assets/icons/share.svg";

function EventHeader() {
  return (
    <section className={styles.header}>
      <button className={styles.header__btn}>
        <img src={arrow_left} alt="왼쪽 화살표" />
      </button>
      <h1 className={styles.header__title}>크리스마스 특별할인</h1>
      <button className={styles.header__btn}>
        <img src={share} alt="공유하기" />
      </button>
    </section>
  );
}

export default EventHeader;
