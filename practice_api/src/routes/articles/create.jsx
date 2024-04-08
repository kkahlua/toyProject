import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()); // formData 형식을 객체로 바꿈 -> JS형식에 맞게 하기 위해서 formData 콘솔로 찍어보면 아무것도 안나온다

    fetch(`http://localhost:3000/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/articles/${data._embedded.article.id}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="content">content</label>
          <textarea name="content" cols={30} rows={10}></textarea>
        </div>
        <button type="submit">전송</button>
      </form>
    </>
  );
}

export default Create;
