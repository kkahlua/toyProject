import "./style/App.css";
import Navibar from "./components/Navibar";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import EventPage from "./pages/EventPage";
import { useState } from "react";
import data from "./data";
function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navibar />
      <Routes>
        <Route path="/" element={<MainPage shoes={shoes} />} />
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>} />
        </Route>
        <Route path="*" element={<div>잘못된 접근입니다.</div>} />
      </Routes>
    </div>
  );
}
export default App;
