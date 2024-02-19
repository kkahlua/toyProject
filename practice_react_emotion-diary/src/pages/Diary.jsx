import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import Button from "../components/Button";
import Header from "../components/Header";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

function Diary() {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    if (diaryList.length > 0) {
      let targetDiary = diaryList.find((e) => parseInt(e.id) === parseInt(id));
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);
  if (!data) {
    return <div className="DiaryPage">로딩중입니다~~~</div>;
  } else {
    const currentEmotionData = emotionList.find(
      (e) => parseInt(e.emotion_id) === parseInt(data.emotion)
    );
    return (
      <div className="DiaryPage">
        <Header
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={<Button text={"뒤로가기"} onClick={() => navigate(-1)} />}
          rightChild={
            <Button
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={currentEmotionData.emotion_img} alt="emotion_img" />
              <div className="emotion_descript">
                {currentEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
}

export default Diary;
