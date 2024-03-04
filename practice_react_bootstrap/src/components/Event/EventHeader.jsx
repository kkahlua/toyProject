import React from "react";
import styles from "../../pages/Event/Event_Bootstrap.module.css";
import arrow_left from "../../assets/icons/arrow_left.svg";
import share from "../../assets/icons/share.svg";
import { Link } from "react-router-dom";

function EventHeader() {
  return (
    <section className={styles.header}>
      <button className={styles.header__btn}>
        <img src={arrow_left} alt="왼쪽 화살표" />
      </button>
      <h1 className={styles.header__title}>크리스마스 특별할인</h1>
      <Link to={"/notice"}>
        <button className={styles.header__btn}>
          <img src={share} alt="share button" />
        </button>
      </Link>
    </section>
  );
}

export default EventHeader;
