import React from "react";
import { useContext } from "react";
import { DiaryStateContext } from "./App";
import DiaryItem from "./DiaryItem";

function DiaryList() {
  let diaryList = useContext(DiaryStateContext);
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={`diaryitem_${it.id}`} {...it} />
        ))}
      </div>
    </div>
  );
}
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
