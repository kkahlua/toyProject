import React, { useState } from "react";

function DiaryEditor() {
  let [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  function handleChangeState(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit() {
    console.log(state);
    alert("Save Success");
  }
  return (
    <div className="DiaryEditor">
      <h2>Simple Diary</h2>
      <div className="authorInput">
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div className="contentTextarea">
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div className="emotionSelect">
        감정 점수
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div className="submitButton">
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}

export default DiaryEditor;
