import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/Welcome/WelcomePage';
import AboutPage from '../pages/About/AboutPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default AppRouter;
