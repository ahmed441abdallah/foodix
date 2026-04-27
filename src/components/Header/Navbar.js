import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { IoMdMenu } from 'react-icons/io';
import { useSidebarContext } from '../../context/sidebarContext';
import SearchForm from './SearchForm';

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar flex align-center ${scrolled ? 'scrolled' : 'navbar--transparent'}`}>
      <div className='container w-100'>
        <div className='navbar-inner flex align-center justify-between'>

          {/* Left: sparse nav links */}
          <div className='navbar-links none flex align-center'>
            <Link to='/mealListAll' className='nav-link'>Menu</Link>
            <Link to='/meal/category/Seafood' className='nav-link'>Collections</Link>
            <Link to='/drink' className='nav-link'>Drinks</Link>
          </div>

          {/* Center: wordmark */}
          <Link to='/' className='navbar-brand flex align-center'>
            <span className='navbar-wordmark'>Foodix</span>
          </Link>

          {/* Right: search + menu toggle */}
          <div className='navbar-right flex align-center'>
            <div className='none'>
              <SearchForm />
            </div>
            <button
              type='button'
              className='navbar-show-btn'
              onClick={() => openSidebar()}
              aria-label='Open menu'
            >
              <IoMdMenu size={24} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
