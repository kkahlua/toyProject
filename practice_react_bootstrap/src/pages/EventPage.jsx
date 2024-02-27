import React from "react";
import styles from "./Event.module.css";
import EventMainSection from "../components/EventMainSection";
import EventHeader from "../components/EventHeader";
import EventProductSection from "../components/EventProductSection";
import EventCouponSection from "../components/EventCouponSection";

function Event() {
  return (
    <article className="layout">
      <div>
        <div className={styles.page__style}>
          <EventHeader />
          <EventMainSection />
          <EventProductSection />
          <EventCouponSection />
        </div>
      </div>
    </article>
  );
}

export default Event;
