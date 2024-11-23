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
       <Header/>
      <Routes>
       
        <Route path="/" element={<Home />} />

        {/* add your routes */}
      </Routes>
      <Footer />
     </div>
  );
}

export default App;
