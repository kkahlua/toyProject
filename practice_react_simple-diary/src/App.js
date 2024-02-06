import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  let [data, setData] = useState([]);
  let dataId = useRef(0);

  function onCreate(author, content, emotion) {
    let created_date = new Date().getTime();
    let newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  function onUpdate(targetId, newContent) {
    setData(
      data.map((e) => (e.id === targetId ? { ...e, content: newContent } : e))
    );
  }

  function onDelete(targetId) {
    let newDiaryList = data.filter((e) => e.id !== targetId);
    setData(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
