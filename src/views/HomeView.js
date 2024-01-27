// HomeView.js
import React, { useEffect, useState } from 'react';
import UserStore from '../stores/UserStore';
import { fetchUserData } from '../actions/userActions';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/header';
import AboutMe from '../components/About/aboutMe';
import '../views/HomeView.css';
import background from '../assets/background.jpg';
const HomeView = () => {
  return (
    <div id='homeview'>
    
      <Header></Header>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </div>
  );
};

export default HomeView;
