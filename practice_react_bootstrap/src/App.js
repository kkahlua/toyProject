import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventPage_Antd from "./pages/EventPage_Antd";
import EventPage_Bootstrap from "./pages/EventPage_Bootstrap";
import NoticePage_Bootstrap from "./pages/NoticePage_Bootstrap";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventPage_Bootstrap />} />
      <Route path="/antd" element={<EventPage_Antd />} />
      <Route path="/notice" element={<NoticePage_Bootstrap />} />
    </Routes>
  );
}

export default App;
