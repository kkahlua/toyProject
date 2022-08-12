import { Outlet } from "react-router-dom";

function EventPage() {
  return (
    <div className="eventPage">
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  );
}

export default EventPage;
