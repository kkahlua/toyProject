import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventPage_Antd from "./pages/EventPage_Antd";
import EventPage_Bootstrap from "./pages/EventPage_Bootstrap";
import EventPage_Mui from "./pages/EventPage_Mui";
import NoticePage_Bootstrap from "./pages/NoticePage_Bootstrap";
import VideoEditor from "./pages/VideoEditor";

function App() {
  return (
    <Routes>
      <Route path="/bootstrap" element={<EventPage_Bootstrap />} />
      <Route path="/antd" element={<EventPage_Antd />} />
      <Route path="/mui" element={<EventPage_Mui />} />
      <Route path="/notice" element={<NoticePage_Bootstrap />} />
      <Route path="/" element={<VideoEditor />} />
    </Routes>
  );
}

export default App;
