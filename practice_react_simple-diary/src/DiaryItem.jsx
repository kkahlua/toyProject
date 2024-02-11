import React, { useState, useRef } from "react";
import { useContext } from "react";
import { DiaryDispatchContext } from "./App";

function DiaryItem({ id, author, content, emotion, created_date }) {
  let { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  let [isEdit, setIsEdit] = useState(false);
  let [localContent, setLocalContent] = useState(content);
  let localContentInput = useRef();

  function toggleIsEdit() {
    setIsEdit(!isEdit);
  }

  function handleDelete() {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  }

  function handleUpdate() {
    if (localContent.length < 1) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onUpdate(id, localContent);
      toggleIsEdit();
    }
  }

  function handelQuitEdit() {
    setIsEdit(false);
    setLocalContent(content);
  }

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="contentArea">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      <div className="buttonArea">
        {isEdit ? (
          <>
            <button onClick={handelQuitEdit}>수정 취소</button>
            <button onClick={handleUpdate}>수정 완료</button>
          </>
        ) : (
          <>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={toggleIsEdit}>Update</button>
          </>
        )}
      </div>
    </div>
  );
}

export default React.memo(DiaryItem);
