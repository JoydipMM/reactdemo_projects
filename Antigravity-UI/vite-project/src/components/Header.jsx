import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const textColor = isHomePage ? 'text-white' : 'text-[#1E1E1E]';

  // Theme tracking configuration
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`navbar absolute top-0 w-full z-50 px-6 py-4 md:px-16 left-0 bg-transparent ${textColor}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-white rounded-box w-52 gap-2 text-[15px] border border-gray-100 font-medium text-[#1E1E1E]">
            <li><Link to="/">Furniture</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </div>
        <Link to="/" className="text-[28px] font-bold tracking-tight">
          Panto
        </Link>
      </div>
        
      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-[15px] font-medium hidden md:flex">
          <li><Link to="/" className="hover:text-[#E58411] transition-colors focus:bg-transparent focus:text-[#E58411]">Furniture</Link></li>
          <li><Link to="/shop" className="hover:text-[#E58411] transition-colors focus:bg-transparent focus:text-[#E58411]">Shop</Link></li>
          <li><Link to="/#about" className="hover:text-[#E58411] transition-colors focus:bg-transparent focus:text-[#E58411]">About Us</Link></li>
          <li><Link to="/#contact" className="hover:text-[#E58411] transition-colors focus:bg-transparent focus:text-[#E58411]">Contact</Link></li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-1">
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleTheme}
          className={`btn btn-ghost btn-circle relative hover:bg-transparent hover:opacity-80 transition-opacity ${textColor}`}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>

        {/* Cart Button */}
        <button 
          onClick={() => setIsCartOpen(true)}
          className={`btn btn-ghost btn-circle relative hover:bg-transparent hover:opacity-80 transition-opacity ${textColor}`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="absolute top-1.5 right-0 bg-[#E58411] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-transparent">
            2
          </span>
        </button>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Header;
