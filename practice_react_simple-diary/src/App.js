import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      let created_date = new Date().getTime();
      let newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "DELETE":
      return state.filter((e) => e.id !== action.targetId);
    case "UPDATE":
      return state.map((e) =>
        e.id === action.targetId ? { ...e, content: action.newContent } : e
      );
    default:
      return state;
  }
}

function App() {
  let dataId = useRef(0);
  const [data, dispatch] = useReducer(reducer, []);
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
    dispatch({ type: "INIT", data: initData });
  }

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onUpdate = useCallback((targetId, newContent) => {
    dispatch({ type: "UPDATE", targetId, newContent });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: "DELETE", targetId });
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
