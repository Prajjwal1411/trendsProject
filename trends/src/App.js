// Created by Anetia Faber, Prajjwal Shukla, Aksha Vinubhai Parvadiya, Gaurav Rana


import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from './components/Footer';
import Header from './components/Header';
import ForBusiness from './components/ForBusiness';
import AboutPage from './components/AboutUs';


function App() {
  return (
    <div>
       <Header/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path = "/about-us" element= {<AboutPage />} />

        {/* add your routes */}
      </Routes>
      <Footer />
     </div>
  );
}

export default App;
