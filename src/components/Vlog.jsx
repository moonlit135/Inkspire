import React, { useState, useEffect } from 'react';
import { FaPlay, FaChevronLeft, FaChevronRight, FaFilter } from 'react-icons/fa';
import ErrorBoundary from './ErrorBoundary';
import { vlogData, featuredContent } from '../data/contentData';

const categories = ['All', 'Lifestyle', 'Book Reviews', 'Travel', 'Thoughts'];

const Vlog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    try {
      // Any initialization logic can go here
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredVlog = React.useMemo(() => {
    try {
      const books = Array.isArray(vlogData) ? vlogData : [];
      return activeCategory === 'All' 
        ? books 
        : books.filter(book => book?.category === activeCategory);
    } catch (error) {
      console.error('Error filtering vlog:', error);
      return [];
    }
  }, [activeCategory, vlogData]);
  
  const featuredVlog = featuredContent?.vlog || {};

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Math.ceil(filteredVlog.length / 3) - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(filteredVlog.length / 3) - 1 : prev - 1));
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading vlogs...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">Error loading vlog: {error}</div>;
  }

  if (!featuredVlog || !vlogData || vlogData.length === 0) {
    return <div className="text-center py-8">No vlog data available</div>;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-8 max-w-5xl mx-auto">
      {/* Featured Vlogs */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img 
              className="h-48 w-full object-cover md:w-40" 
              src={
                featuredVlog?.image
                  ? (featuredVlog.image.startsWith('http')
                      ? featuredVlog.image
                      : featuredVlog.image.startsWith('/')
                        ? featuredVlog.image
                        : `/${featuredVlog.image}`)
                  : `${process.env.PUBLIC_URL || ''}/images/vlog1.jpg`
              }
            />
          </div>
          <div className="p-6">
            <div className="uppercase tracking-wide text-sm text-amber-600 font-semibold">
              Featured Vlogs • {featuredVlog.category}
            </div>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">{featuredVlog.title}</h2>
            <p className="mt-3 text-gray-600">{featuredVlog.description}</p>
            <div className="mt-4 flex items-center">
              <span className="text-sm text-gray-500">{featuredVlog.duration} • {featuredVlog.date}</span>
              <button className="ml-4 px-4 py-2 bg-amber-500 text-white rounded-full flex items-center hover:bg-amber-600 transition-colors">
                <FaPlay className="mr-2" /> Play 
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Audiobook Episodes Carousel */}
      <div className="relative mt-6">
        <div className="flex flex-col space-y-4 mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl text-amber-600 font-bold">Latest Vlogs</h3>
            {filteredVlog.length > 3 && (
              <div className="flex space-x-2">
                <button 
                  onClick={prevSlide}
                  className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-transform hover:scale-110"
                  aria-label="Previous episodes"
                >
                  <FaChevronLeft className="text-amber-600" size={16} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-transform hover:scale-110"
                  aria-label="Next episodes"
                >
                  <FaChevronRight className="text-amber-600" size={16} />
                </button>
              </div>
            )}
          </div>
          
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <FaFilter className="text-amber-600 flex-shrink-0" />
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {filteredVlog.map((vlog) => (
              <div key={vlog.id} className="w-full md:w-1/3 flex-shrink-0 px-2">
                <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col">
                  <div className="h-32 mb-3 overflow-hidden rounded-lg">
                    <img 
                      src={
                        vlog?.image
                          ? (vlog.image.startsWith('http')
                              ? vlog.image
                              : vlog.image.startsWith('/')
                                ? vlog.image
                                : `/${vlog.image}`)
                          : `${process.env.PUBLIC_URL || ''}/images/vlog1.jpg`
                      }
                      alt={vlog.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/vlog1.jpg';
                      }}
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
                        {vlog.category}
                      </span>
                      <span className="ml-2 text-xs text-gray-500">{vlog.duration}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 line-clamp-2">{vlog.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{vlog.creator} • {vlog.views} views</p>
                  </div>
                  <button className="mt-3 text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center">
                    <FaPlay className="mr-1" size={12} /> Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

const VlogWithErrorBoundary = () => (
  <ErrorBoundary>
    <Vlog />
  </ErrorBoundary>
);

export default VlogWithErrorBoundary;