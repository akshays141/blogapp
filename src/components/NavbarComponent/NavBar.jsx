import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import blog_logo from "../Assets/blog_logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import profile_img from '../Assets/profile_img.png';
import { VscAccount } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
import { IoHelpSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

const NavBar = ({ setCurrentUser, setSearchQuery, loggedInUser }) => {
  const navigate = useNavigate();
  const menuRef = useRef();
  const listRef = useRef();

  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(()=>{
    setUserName(loggedInUser.name);
  },[loggedInUser])

useEffect(()=>{

  const closeOpenMenu = (event) =>{
    if(showProfile && (!menuRef.current?.contains(event.target) && !listRef.current?.contains(event.target))){
      setShowProfile(false);
    }
    
  }

  document.addEventListener("mousedown",closeOpenMenu);

  return ()=>{
    document.removeEventListener('mousedown',closeOpenMenu);
  }

})

const handleLinkClick =() =>{
setShowProfile(false);
}
   
const showProfileCard = () =>{
  setShowProfile(prev => !prev);
}

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setCurrentUser(false);
    navigate("/login");
  };

  return (
    <div className="header">
      <nav className="navbar">
        <img src={blog_logo} alt="" />
        <div className="links">
          <ul className="nav-list">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about"> ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/write">WRITE</NavLink>
            </li>
            <li className="logout" onClick={handleLogout}>
              LOGOUT
            </li>
          </ul>
        </div>
        <form>
          <div className="search">
            <input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button>
              <span class="material-symbols-outlined">search</span>
            </button>
          </div>
        </form>

        <div className="profile-icon" onClick={showProfileCard} ref={menuRef}>
          <span>{userName}</span>
          <div className="profile-image">
            <img src={profile_img} alt="" />
          </div>
        </div>
        <div className={showProfile?"profile-list show":"profile-list"} ref={listRef}>
            <li><Link to='/profile' onClick={handleLinkClick}><VscAccount />Profile</Link></li>
            <li><Link to='/settings' onClick={handleLinkClick}><AiFillSetting />Settings</Link></li>
            <li><Link onClick={handleLinkClick}><IoHelpSharp />Helps</Link></li>
            <li><Link onClick={handleLinkClick}><LuLogOut />Logout</Link></li>
          </div>
      </nav>
    </div>
  );
};

export default NavBar;
