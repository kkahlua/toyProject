import * as React from "react";
import { Link } from "react-router-dom";

function List() {
  const [articles, setArticles] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/articles", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data._embedded.articles);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>List</h1>
      <ul>
        {articles.map((article, idx) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link to={"/articles/new"}>
        <button>게시글 작성</button>
      </Link>
    </>
  );
}

export default List;
