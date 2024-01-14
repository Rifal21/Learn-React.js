import InputForm from "../Elements/input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/authservice";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      {loginFailed && (
        <p className="text-red-500 text-center font-bold">{loginFailed}</p>
      )}
      <InputForm
        label="Username"
        type="text"
        placeholder="jojo21"
        name="username"
        ref={usernameRef}
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="************"
        name="password"
      ></InputForm>

      <Button classname="bg-blue-700 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
