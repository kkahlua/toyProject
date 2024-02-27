import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import styles from "./Notice_Bootstrap.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import notice_result from "../assets/images/event/notice_result.png";
import leeshop from "../assets/icons/leeshop.svg";
import search from "../assets/icons/search.svg";
import menu from "../assets/icons/menu.svg";
import heart from "../assets/icons/heart.svg";
import comment from "../assets/icons/comment.svg";
import more from "../assets/icons/more.svg";
import bootStrapLogo from "../assets/icons/bootStrapLogo.svg";

export const commentList = [
  {
    id: "6213dbc0-de02-4938-87c8-2a982fe6fc2e",
    img: "http://dummyimage.com/202x100.png/ff4444/ffffff",
    userName: "Raul Labadini",
    comment:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    like: 1,
    reply: [
      {
        img: "http://dummyimage.com/202x100.png/ff4444/ffffff",
        userName: "Raul Labadini",
        comment:
          "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        like: 1,
      },
      {
        img: "http://dummyimage.com/202x100.png/ff4444/ffffff",
        userName: "Raul Labadini",
        comment:
          "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        like: 1,
      },
      {
        img: "http://dummyimage.com/202x100.png/ff4444/ffffff",
        userName: "Raul Labadini",
        comment:
          "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        like: 1,
      },
    ],
  },
  {
    id: "b1d273f2-579d-4ebc-a281-0687c855d9f2",
    img: "http://dummyimage.com/208x100.png/dddddd/000000",
    userName: "Kristel Rojel",
    comment:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    like: 2,
    reply: [],
  },
  {
    id: "70d562d8-35d2-4929-b1ed-e8fe90692904",
    img: "http://dummyimage.com/119x100.png/cc0000/ffffff",
    userName: "Kerby Brabban",
    comment:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    like: 3,
    reply: [],
  },
  {
    id: "9fafd240-204c-48b0-902b-48addf3db977",
    img: "http://dummyimage.com/225x100.png/dddddd/000000",
    userName: "Latisha Muzzillo",
    comment: "Suspendisse potenti. In eleifend quam a odio.",
    like: 4,
    reply: [],
  },
  {
    id: "5d5b61de-855a-4929-97ef-1c32a0d51820",
    img: "http://dummyimage.com/221x100.png/ff4444/ffffff",
    userName: "Obed Maior",
    comment:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    like: 5,
    reply: [],
  },
  {
    id: "674a28b7-4dfc-4de1-bc46-b0864bf3333e",
    img: "http://dummyimage.com/149x100.png/dddddd/000000",
    userName: "Herbert Van den Hof",
    comment: "Suspendisse potenti.",
    like: 6,
    reply: [],
  },
  {
    id: "a3a7461a-0a3d-4bea-a5f0-fab552b4c727",
    img: "http://dummyimage.com/145x100.png/5fa2dd/ffffff",
    userName: "Sheilakathryn Guppie",
    comment:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    like: 7,
    reply: [],
  },
  {
    id: "0e6e9103-81a8-4cc8-8c26-9412230f18ae",
    img: "http://dummyimage.com/197x100.png/5fa2dd/ffffff",
    userName: "Anabella Macieja",
    comment:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
    like: 8,
    reply: [],
  },
  {
    id: "b045b68d-dbbc-4d64-8d2b-b629e02f9558",
    img: "http://dummyimage.com/220x100.png/dddddd/000000",
    userName: "Bartie Wimlett",
    comment:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    like: 9,
    reply: [],
  },
  {
    id: "13bbae99-8d69-48d8-a452-73de401ce131",
    img: "http://dummyimage.com/144x100.png/dddddd/000000",
    userName: "Pancho Gregol",
    comment: "Duis at velit eu est congue elementum.",
    like: 10,
    reply: [],
  },
];

function Comment({ data, isReply }) {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginBottom: 4,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 32,
              border: "1px solid #EAEAEA",
              padding: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={bootStrapLogo}
              alt="user icon"
              style={{ width: "100%" }}
            />
          </div>
          <p className={styles.user__name}>{data.userName}</p>
        </div>
        <img src={more} alt="more button" />
      </div>

      <p className={styles.comment}>{data.comment}</p>

      <div
        className={styles.comment__info}
        data-reply={isReply}
        style={{ display: "flex", gap: 8 }}
      >
        <div style={{ display: "flex", gap: 2 }}>
          <img src={heart} alt="좋아요 버튼" />
          <p>좋아요</p>
          <p>{data.like.toLocaleString()}</p>
        </div>

        {!isReply && (
          <div style={{ display: "flex", gap: 2 }}>
            <img src={comment} alt="답글 버튼" />

            <p>답글</p>
            <p>{data.reply.length.toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
function NoticePage_Bootstrap() {
  const [commentToggle, setCommentToggle] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("등록순");

  const handleCurrnetFilter = (newFilter) => setCurrentFilter(newFilter);
  const handleCommentToggle = (toggleValue) => setCommentToggle(toggleValue);
  return (
    <article className="layout">
      <div>
        <div
          className={styles.page__style}
          onClick={() => handleCommentToggle(!commentToggle)}
        >
          <section className={styles.header}>
            <Link to={"/event/bootstrap"}>
              <button className={styles.header__btn}>
                <img src={leeshop} alt="leeshop" />
              </button>
            </Link>

            <h1 className={styles.header__title}>공지사항</h1>

            <div style={{ display: "flex", gap: 16 }}>
              <button className={styles.header__btn}>
                <img src={search} alt="search button" />
              </button>

              <button className={styles.header__btn}>
                <img src={menu} alt="menu button" />
              </button>
            </div>
          </section>

          <section className={styles.notice__section}>
            <p className={styles.subtitle}>이벤트 당첨자 안내</p>
            <h2 className={styles.title}>
              12월 24일 크리스마스 이벤트 응모 추첨 당첨자 안내
            </h2>

            <hr style={{ border: "1px solid #EAEAEA" }} />

            <div className={styles.notice__content__section}>
              <img src={notice_result} alt="notice" />

              <p className={styles.content}>
                {`안녕하세요. LEESHOP입니다.
크리스마스 이벤트 응모 추첨 당첨자를 발표합니다.
참여해 주셔서 진심으로 감사드립니다.
축하드립니다!

1등(1명)구글플레이 기프티콘 10만원권
김*동 ied****

2등(2명)
구글플레이 기프티콘 5만원권
김*솔 han*******
김*정 win***

3등(3명)구글플레이 기프티콘 3만원권
박*원 Jiw**
차*우 Cha********
강*진 Gha******

당첨을 진심으로 축하드리며 개별 연락을 드릴 예정입니다.`}
              </p>
            </div>
          </section>

          <hr style={{ border: "3.5px solid #EAEAEA" }} />

          <section className={styles.comment__section}>
            <div className={styles.comment__header}>
              <div>
                <div style={{ display: "flex", gap: 4 }}>
                  <p>댓글</p>
                  <p className={styles.comment__amount}>4개</p>
                </div>
              </div>

              <ul className={styles.filter__list}>
                <li
                  className={styles.filter__btn}
                  data-active={currentFilter === "등록순"}
                  onClick={() => handleCurrnetFilter("등록순")}
                >
                  등록순
                </li>
                <li
                  className={styles.filter__btn}
                  data-active={currentFilter === "최신순"}
                  onClick={() => handleCurrnetFilter("최신순")}
                >
                  최신순
                </li>
              </ul>
            </div>

            <hr style={{ border: "1px solid #EAEAEA" }} />

            <div>
              {commentList.map((e) => (
                <div className={styles.comment__card}>
                  <Comment data={e} />
                  <div
                    style={{
                      marginLeft: 24,
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    {e.reply.map((x) => (
                      <Comment data={x} isReply />
                    ))}
                  </div>

                  <Form.Control
                    value=""
                    placeholder="답글을 입력해주세요."
                    onClick={() => handleCommentToggle(true)}
                    className={styles.comment__input__field}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        {commentToggle && (
          <section className={styles.comment__input}>
            <hr style={{ border: "1px solid #EAEAEA" }} />

            <div style={{ padding: "8px 16px" }}>
              <Form.Control
                placeholder="답글을 입력해주세요."
                style={{ background: "#F6F6F6" }}
                className={styles.comment__input__field}
              />
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

export default NoticePage_Bootstrap;
