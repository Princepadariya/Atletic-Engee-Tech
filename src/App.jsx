import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Quality from './pages/Quality';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import AdvancedPreloader from './components/AdvancedPreloader';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/product" element={<PageTransition><Product /></PageTransition>} />
        <Route path="/product/electric-pin" element={<PageTransition><ProductDetail /></PageTransition>} />
        <Route path="/quality" element={<PageTransition><Quality /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && (
          <AdvancedPreloader key="preloader" onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <ScrollToTop />
      <SmoothScroll>
        <CustomCursor />
        {!isLoading && (
          <motion.div
            className="app-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          >
            <motion.div
              className="scroll-progress-bar"
              style={{
                scaleX,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'var(--accent)',
                transformOrigin: '0%',
                zIndex: 1001
              }}
            />
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </motion.div>
        )}
      </SmoothScroll>
    </Router>
  );
};

export default App;
