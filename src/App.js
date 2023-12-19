import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./MyComponents/Login";
import Index2 from './MyComponents/Index2';
import Index3 from './MyComponents/Index3';
import Landing from './MyComponents/Landing';


function App() {                 
  return (
    <Router>
      <Routes>
        {/* Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<Index3 />} />
        <Route path="/contact" element={<Index2 />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
