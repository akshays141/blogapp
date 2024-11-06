import { Link } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({setCurrentUser}) {
  const navigate = useNavigate();

const [registeredUser, setRegisteredUser]= useState("")

  useEffect(()=>{
    setRegisteredUser(JSON.parse(localStorage.getItem("user")));
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if(setRegisteredUser && isLoggedIn===true){
      
    }
  },[registeredUser]);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (
      input.email === registeredUser.email &&
      input.password === registeredUser.password
    ) {
      
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
