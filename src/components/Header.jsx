import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-2 px-2 md:py-4 md:px-4">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-white/5 shadow-lg px-3 py-2 md:px-6 md:py-3 flex items-center justify-between">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="md:hidden mr-2">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#e9c46a] hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
            {/* Logo */}
            <div className="relative inline-block">
              {/* Decorative leaf design */}
              <div className="absolute -inset-3 -z-10 md:-inset-4">
                <div className="absolute inset-0 bg-[#5d3abf]/10 rounded-full blur-md transform rotate-45 scale-90">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5d3abf]/15 to-transparent rounded-full"></div>
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#e9c46a]/20 to-transparent rounded-full"></div>
                </div>
              </div>
              <Link 
                to="/" 
                className="relative text-2xl md:text-3xl font-['Mr_De_Haviland'] font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-[#f0e4ff] cursor-pointer z-10"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                  }
                }}
              >
                MyFictionWorld
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className={`${isMobileMenuOpen ? 'fixed top-16 left-2 right-2 bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-4' : 'hidden'} md:flex md:relative md:bg-transparent md:shadow-none md:p-0`} ref={mobileMenuRef}>
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-6 md:space-y-0 lg:space-x-8">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-white' : 'text-[#e9c46a]'} hover:text-white font-medium transition-colors md:text-base text-lg`}
            >
              Home
            </Link>
            <Link 
              to="/writer" 
              className={`${location.pathname === '/writer' ? 'text-white' : 'text-[#e9c46a]'} hover:text-white font-medium transition-colors md:text-base text-lg`}
            >
              Writer's Studio
            </Link>
            <Link 
              to="/library" 
              className={`${location.pathname === '/library' ? 'text-white' : 'text-[#e9c46a]'} hover:text-white font-medium transition-colors md:text-base text-lg`}
            >
              Library
            </Link>
            <Link 
              to="/echoes" 
              className={`${location.pathname === '/echoes' ? 'text-white' : 'text-[#e9c46a]'} hover:text-white font-medium transition-colors md:text-base text-lg`}
            >
              Echoes & Frames
            </Link>
            <Link 
              to="/showcase" 
              className={`${location.pathname === '/showcase' ? 'text-white' : 'text-[#e9c46a]'} hover:text-white font-medium transition-colors md:text-base text-lg`}
            >
              Showcase & Challenges
            </Link>
            </div>
          </nav>

          {/* Search and Login */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative" ref={searchRef}>
              <button 
                onClick={handleSearchToggle}
                className="text-[#e9c46a] hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Search"
              >
                <FaSearch className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="relative">
                    <input
                      id="search-input"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search stories, poems, authors..."
                      className="w-full py-3 px-4 pr-10 text-gray-800 focus:outline-none"
                    />
                    <button 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600"
                      onClick={handleSearchToggle}
                    >
                      <FaTimes />
                    </button>
                  </div>
                  {/* Search results would go here */}
                  {searchQuery && (
                    <div className="max-h-60 overflow-y-auto py-2">
                      <div className="px-4 py-2 text-sm text-gray-500">
                        Search results for "{searchQuery}"
                      </div>
                      {/* Sample search result items */}
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <div className="font-medium">Sample Story Title</div>
                        <div className="text-sm text-gray-500">By Author Name</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <button className="bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 md:px-5 md:py-2 rounded-full font-medium flex items-center space-x-1 md:space-x-2 transition-colors text-sm md:text-base">
              <FaUser className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;