import { Link } from "react-router-dom"
import "./Register.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();
  
  const[input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(input));
    navigate('/login')
  }

    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
        className="registerInput" 
        type="text" 
        name="name"
        value={input.name}
        onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
        placeholder="Enter your username..." 
        />
        <label>Email</label>
        <input 
        className="registerInput" 
        type="text" 
        name="email" 
        value={input.email}
        onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
        placeholder="Enter your email..." />
        <label>Password</label>
        <input 
        className="registerInput" 
        type="password" 
        name="password"
        value={input.password} 
        onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
        placeholder="Enter your password..." />
        <button type="submit" className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton"><Link to='/login'>Login</Link></button>
    </div>
    )
}