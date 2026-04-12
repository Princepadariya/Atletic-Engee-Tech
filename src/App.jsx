import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Quality from './pages/Quality';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/electric-pin" element={<ProductDetail />} />
        <Route path="/quality" element={<Quality />} />
        {/* Future routes like /products can be added here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
