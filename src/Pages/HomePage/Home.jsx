import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Posts from '../../components/Posts/Posts';

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  )
}

export default Home