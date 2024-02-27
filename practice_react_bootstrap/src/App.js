import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventPage_Bootstrap from "./pages/EventPage_Bootstrap";
import NoticePage_Bootstrap from "./pages/NoticePage_Bootstrap";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventPage_Bootstrap />} />
      <Route path="/notice" element={<NoticePage_Bootstrap />} />
    </Routes>
  );
}

export default App;
