import React from "react";
import styles from "./Event_Bootstrap.module.css";
import EventMainSection from "../../components/Event/EventMainSection";
import EventHeader from "../../components/Event/EventHeader";
import EventProductSection from "../../components/Event/EventProductSection";
import EventCouponSection from "../../components/Event/EventCouponSection";

function EventPage_Bootstrap() {
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

export default EventPage_Bootstrap;
