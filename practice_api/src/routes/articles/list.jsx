import * as React from "react";
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
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
