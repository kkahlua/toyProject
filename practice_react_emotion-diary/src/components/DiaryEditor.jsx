import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import Header from "./Header";
import { DiaryDispatchContext } from "../App";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript: "완전 좋음",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript: "좋음",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript: "그럭저럭",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript: "나쁨",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript: "완전 나쁨",
  },
];

function getStringDate(date) {
  return date.toISOString().slice(0, 10);
}

function DiaryEditor({ isEdit, originData }) {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));
  const navigate = useNavigate();
  const { onCreate, onEdit } = useContext(DiaryDispatchContext);

  function handleClickEmote(emotion) {
    setEmotion(emotion);
  }

  function handelSubmit() {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "일기를 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) onCreate(date, content, emotion);
      else onEdit(originData.id, date, content, emotion);
    }

    navigate("/", { replace: true });
  }
  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);
  return (
    <div className="DiaryEditor">
      <Header
        headText={isEdit ? "일기 수정하기" : "일기 쓰기"}
        leftChild={<Button text={"뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <section>
        <h4>날짜를 선택해주세요</h4>
        <div className="input_box">
          <input
            className="input_date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </section>
      <section>
        <h4>오늘의 기분을 선택해주세요</h4>
        <div className="input_box emotion_list_wrapper">
          {emotionList.map((e) => (
            <EmotionItem
              key={e.emotion_id}
              {...e}
              onClick={handleClickEmote}
              isSelected={e.emotion_id === emotion}
            />
          ))}
        </div>
      </section>
      <section>
        <h4>일기를 작성해주세요</h4>
        <div className="input_box text_wrapper">
          <textarea
            placeholder="오늘을 기억하기 위해 일기를 작성해 보세요!"
            ref={contentRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </section>
      <section>
        <div className="control_box">
          <Button text={"취소하기"} onClick={() => navigate(-1)} />
          <Button text={"작성완료"} type={"positive"} onClick={handelSubmit} />
        </div>
      </section>
    </div>
  );
}

export default DiaryEditor;
