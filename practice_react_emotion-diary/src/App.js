import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          headText={"App"}
          leftChild={
            <Button text={"left button"} onClick={() => alert("left click")} />
          }
          rightChild={
            <Button
              text={"right button"}
              onClick={() => alert("right click")}
            />
          }
        />
        <Button
          text={"button"}
          onClick={() => alert("Click!")}
          type={"positive"}
        />
        <Button
          text={"button"}
          onClick={() => alert("Click!")}
          type={"negative"}
        />
        <Button text={"button"} onClick={() => alert("Click!")} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
