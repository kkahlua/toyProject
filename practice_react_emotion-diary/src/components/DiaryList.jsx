import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "모두" },
  { value: "good", name: "좋은 감정" },
  { value: "bad", name: "나쁜 감정" },
];

const ControlMenu = React.memo(function ControlMenu({
  value,
  onChange,
  optionList,
}) {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((e, idx) => (
        <option key={`option_${idx}`} value={e.value}>
          {e.name}
        </option>
      ))}
    </select>
  );
});

function DiaryList({ diaryList }) {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  function getProcessedDiaryList() {
    function filterCallBack(e) {
      if (filter === "good") return e.emotion <= 3;
      else return e.emotion > 3;
    }
    let copyList = JSON.parse(JSON.stringify(diaryList));
    let filterdList =
      filter === "all" ? copyList : copyList.filter((e) => filterCallBack(e));
    let sortedList = filterdList.sort((a, b) => {
      if (sortType === "latest") return parseInt(b.date) - parseInt(a.date);
      else return parseInt(a.date) - parseInt(b.date);
    });
    return sortedList;
  }

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <Button
            type={"positive"}
            text={"새 일기쓰기"}
            onClick={() => {
              navigate("/new");
            }}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((e) => (
        <DiaryItem key={e.id} {...e} />
      ))}
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
