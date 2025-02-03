import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AppRouter from './routes/Router'; 

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Sai Sam Phyo Linn | Engineering Ideas into Reality</title>
        <meta name="description" content="Welcome to Sai Sam Phyo Linn's portfolio. Explore and learn more about my work, ideas, and journey." />
        <meta name="keywords" content="Sai Sam Phyo Linn, Portfolio, Engineering, Ideas, Projects" />
        <meta name="author" content="Sai Sam Phyo Linn" />
      </Helmet>
      <div id="app-container">
        <Navbar />
        <div className="main-content">
          <AppRouter /> {}
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
