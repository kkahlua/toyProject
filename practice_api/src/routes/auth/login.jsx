import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()); // formData 형식을 객체로 바꿈 -> JS형식에 맞게 하기 위해서 formData 콘솔로 찍어보면 아무것도 안나온다

    fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        navigate("/articles");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">전송</button>
      </form>
    </>
  );
}

export default Login;
