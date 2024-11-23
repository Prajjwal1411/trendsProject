import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from './components/Footer';
import Header from './components/Header';
import ForBuisness from './components/ForBuisness';


function App() {
  return (
    <div>
       <Header/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/for-business" element={<ForBuisness />} />

        {/* add your routes */}
      </Routes>
      <Footer />
     </div>
  );
}

export default App;
