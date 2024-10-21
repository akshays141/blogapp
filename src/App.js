import './App.css';
import NavBar from './components/NavbarComponent/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/Pages/HomePage/Home'
import About from './Pages/AboutPage/About';
import { Contact } from './Pages/ContactPage/Contact';
import Write from './Pages/WritePage/Write'
import Logout from './Pages/LogoutPage/Logout';
import Single from './Pages/Single/Single';
import Register from './Pages/Register/Register';
import Login from './Pages/LoginPage/Login';
import Settings from './Pages/Settings/Settings';

function App() {
  const currentUser = false;
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/posts" element={<Home/>} />
            <Route path="/post/:id" element={<Single/>} />
            <Route path="/register" element= {currentUser ? <Home/> : <Register/>} />
            <Route path="/login" element={currentUser ? <Home /> : <Login />}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/write" element={currentUser ? <Write /> : <Login />} />
            <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
            <Route path='/logout' element={<Logout/>}/>
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
