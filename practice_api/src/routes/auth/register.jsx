import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries()); // formData 형식을 객체로 바꿈 -> JS형식에 맞게 하기 위해서 formData 콘솔로 찍어보면 아무것도 안나온다

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/auth/login");
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input type="username" name="username" />
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

export default Register;
