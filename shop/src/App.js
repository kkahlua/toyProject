import "./App.css";
import Navibar from "./components/Navibar";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}
export default App;
