import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logoImg from '../assets/images/Atletic logo 1.svg';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isSpecialPage = location.pathname === '/quality' || location.pathname.startsWith('/product');

  return (
    <nav className={`navbar ${isSpecialPage ? 'navbar-quality' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoImg} alt="Atletic Engee Tech Logo" />
          <span className="logo-text">Atletic Engee Tech</span>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/quality">Quality</Link>
        <a href="#contact">Contact</a>
      </div>
      <button className="mobile-toggle" aria-label="Menu">
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
