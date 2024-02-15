import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function DiaryItem({ id, emotion, content, date }) {
  const navigate = useNavigate();
  let strDate = new Date(parseInt(date)).toLocaleDateString();

  function goDetail() {
    navigate(`/diary/${id}`);
  }
  function goEdit() {
    navigate(`/edit/${id}`);
  }
  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt="emotion_image"
        />
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <Button text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  );
}

export default DiaryItem;
