import './App.css';
import NavBar from './components/NavbarComponent/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/Pages/HomePage/Home'
import About from './Pages/AboutPage/About';
import { Contact } from './Pages/ContactPage/Contact';
import Write from './Pages/WritePage/Write';
import Single from './Pages/Single/Single';
import Register from './Pages/Register/Register';
import Login from './Pages/LoginPage/Login';
import Settings from './Pages/Settings/Settings';
import { useEffect, useState } from 'react';
import Profile from './Pages/Profile/Profile';

function App() {

  const [searchQuery, setSearchQuery] = useState("");

  const [currentUser, setCurrentUser] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState({});


  useEffect(() => {
    
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    setCurrentUser(isLoggedIn);
    },[]);

 

  return (
    <>
      <BrowserRouter>
        <NavBar setCurrentUser={setCurrentUser} setSearchQuery={setSearchQuery} loggedInUser={loggedInUser} />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home searchQuery={searchQuery}/>} />
            <Route path="/posts" element={<Home searchQuery={searchQuery}/>} />
            <Route path="/post/:id" element={<Single/>} />
            <Route path="/register" element= {currentUser ? <Home/> : <Register/>} />
            <Route path="/login" element={currentUser ? <Home /> : <Login setCurrentUser={setCurrentUser} setLoggedInUser={setLoggedInUser} />}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/write" element={currentUser ? <Write /> : <Login setCurrentUser={setCurrentUser} setLoggedInUser={setLoggedInUser}/>} />
            <Route path='/profile' element={currentUser? <Profile/>: <Login/>} />
            <Route path="/settings" element={currentUser? <Settings />:<Login /> } />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
