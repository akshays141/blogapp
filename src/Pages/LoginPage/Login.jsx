import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({setCurrentUser, setLoggedInUser}) {
  const navigate = useNavigate();



  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === registeredUser.email &&
      input.password === registeredUser.password
    ) {
      
      setLoggedInUser(registeredUser);
      localStorage.setItem('isLoggedIn',JSON.stringify(true));
      setCurrentUser(true);
      navigate("/");
    }
    else{
      alert('wrong Email or Password');
    }
  };


  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          placeholder="Enter your password..."
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}
