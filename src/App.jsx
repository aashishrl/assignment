import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';
import IntermediatePage from './pages/IntermediatePage/IntermediatePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/intermediate" element={<IntermediatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
