import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate }  from 'react-router-dom';
import Login from '../src/component/pages/Login.js'

function App() {
  return (
   <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      </Routes>
   </Router>
  );
}

export default App;
