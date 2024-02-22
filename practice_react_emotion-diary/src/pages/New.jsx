import React, { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

function New() {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Emotion Diary - New Diary`;
  }, []);
  return (
    <div className="New">
      <DiaryEditor />
    </div>
  );
}

export default New;
