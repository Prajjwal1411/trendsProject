import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* add your routes */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
