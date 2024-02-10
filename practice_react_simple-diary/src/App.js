import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  let [data, setData] = useState([]);
  let dataId = useRef(0);

  async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (e) => e.json()
    );
    let initData = res.slice(0, 20).map((e) => {
      return {
        author: e.email,
        content: e.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  }

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    let created_date = new Date().getTime();
    let newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData((data) => [newItem, ...data]);
  }, []);

  const onUpdate = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((e) => (e.id === targetId ? { ...e, content: newContent } : e))
    );
  }, []);

  const onDelete = useCallback((targetId) => {
    setData((data) => data.filter((e) => e.id !== targetId));
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    if (data.length === 0) {
      return { goodcount: 0, badCount: 0, goodRatio: 0 };
    }
    let goodCount = data.filter((e) => e.emotion >= 3).length;
    let badCount = data.length - goodCount;
    let goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  let { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}%</div>
      <DiaryList diaryList={data} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
