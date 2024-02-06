import React, { useRef, useState } from "react";

function DiaryEditor({ onCreate }) {
  let authorInput = useRef();
  let contentTextarea = useRef();
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
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 1) {
      contentTextarea.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("Save Success");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  }
  return (
    <div className="DiaryEditor">
      <h2>Simple Diary</h2>
      <div className="authorInput">
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div className="contentTextarea">
        <textarea
          ref={contentTextarea}
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
