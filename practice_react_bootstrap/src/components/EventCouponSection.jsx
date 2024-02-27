import React from "react";
import styles from "../pages/Event_Bootstrap.module.css";

function EventCouponSection() {
  return (
    <section className={styles.coupon__section}>
      <h2>
        어디서든 사용가능한
        <br />
        15% 쿠폰을 드려요!
      </h2>
      <p>쿠폰 지급 기간 : ~ 12월 31일 까지</p>
    </section>
  );
}

export default EventCouponSection;
