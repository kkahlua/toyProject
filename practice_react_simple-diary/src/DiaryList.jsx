import React from "react";
import DiaryItem from "./DiaryItem";

function DiaryList({ diaryList, onDelete, onUpdate }) {
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem
            key={`diaryitem_${it.id}`}
            {...it}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
}
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
