import React from "react";

function DiaryEditor() {
  return (
    <div className="DiaryEditor">
      <h2>Simple Diary</h2>
      <div className="authorInput">
        <input />
      </div>
      <div className="contentTextarea">
        <textarea />
      </div>
      <div className="emotionSelect">
        감정 점수
        <select>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div className="submitButton">
        <button>Save!</button>
      </div>
    </div>
  );
}

export default DiaryEditor;
