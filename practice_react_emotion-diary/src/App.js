import React, { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function reducer(state, action) {
  let newState = [];
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((e) => e.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((e) =>
        e.id === action.data.id ? { ...action.data } : e
      );
      break;
    }
    default:
      return state;
  }
  return newState;
}
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "1231231244",
    date: 1707982327506,
  },
  {
    id: 2,
    emotion: 2,
    content: "22234214244",
    date: 1707982327700,
  },
  {
    id: 3,
    emotion: 3,
    content: "332323244",
    date: 1707982328000,
  },
  {
    id: 4,
    emotion: 4,
    content: "432323244",
    date: 1707982338000,
  },
  {
    id: 5,
    emotion: 5,
    content: "532323244",
    date: 1707982348000,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);

  function onCreate(date, content, emotion) {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  }

  function onRemove(targetId) {
    dispatch({ type: "REMOVE", targetId });
  }

  function onEdit(targetId, date, content, emotion) {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
