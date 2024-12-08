import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate }  from 'react-router-dom';
import Login from '../src/component/pages/Login.js'
import Register from './component/pages/Register.js';
import MapPage from './component/pages/MapPage.js';
// import Header from './component/pages/Header.js';
import InvestigationList from './component/pages/InvestigationList.js';
import TutorialMain from './component/pages/Tutorial/TutorialMain.js';
import TaskPage from './component/pages/TaskPage.js';

function App() {
  return (
    <>
   <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/map" replace />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="investigations" element={<InvestigationList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tutorial" element={<TutorialMain />} />
      <Route path="/tasks/:investigationId" element={<TaskPage />} />
      </Routes>
   </Router>
   </>
  );
}

export default App;