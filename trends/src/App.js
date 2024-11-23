import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from './components/Footer';
import Header from './components/Header';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element = {<Header/>}/>
        {/* add your routes */}
      </Routes>
      <Footer />
     </div>
  );
}

export default App;
