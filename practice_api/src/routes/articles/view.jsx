import * as React from "react";
import { useParams } from "react-router-dom";

function View() {
  const { articleId } = useParams();
  const [article, setArticle] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:3000/articles/${articleId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticle(data._embedded.article);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
}

export default View;
