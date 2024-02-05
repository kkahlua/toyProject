import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "james",
    content: "asdf",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "tom",
    content: "fdas",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "alex",
    content: "qwer",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
