import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collectionBooks } from '../data/BookData';

const Collections = () => {
  const [visibleBooks, setVisibleBooks] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const booksPerLoad = 12;

  const categories = ['All', ...new Set(collectionBooks.map(book => book.category))];
  
  const filteredBooks = selectedCategory === 'All' 
    ? collectionBooks 
    : collectionBooks.filter(book => book.category === selectedCategory);

  const loadMoreBooks = () => {
    setVisibleBooks(prev => prev + booksPerLoad);
  };

  return (
    <div className="py-12 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-10 pt-2">
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent w-3/4"></div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="relative">
              <div className="absolute -left-4 -top-2 text-amber-600/40 text-5xl font-serif transform -rotate-12">"</div>
              <h2 className="text-4xl font-serif font-bold text-amber-900 relative z-10 tracking-wider">
                <span className="relative inline-block">
                  <span className="relative z-10">Explore the Shelves</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-100/70 -z-0 transform -rotate-1"></span>
                </span>
              </h2>
              <div className="absolute -right-4 -bottom-4 text-amber-600/40 text-5xl font-serif transform rotate-12">"</div>
              <div className="mt-2 h-px bg-gradient-to-r from-amber-100 via-amber-400 to-amber-100"></div>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-amber-700 tracking-wider uppercase font-serif">Filter by Category</span>
                <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 font-medium tracking-wide ${
                      selectedCategory === category 
                        ? 'bg-amber-700 text-amber-50 shadow-md transform -translate-y-0.5' 
                        : 'bg-amber-50/80 text-amber-800 hover:bg-amber-100 border border-amber-200/70 hover:border-amber-300 hover:shadow-sm'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-50 bg-opacity-70 rounded-xl shadow-lg p-6 border border-amber-200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.slice(0, visibleBooks).map((book) => (
              <div key={book.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-sm font-bold line-clamp-1">{book.title}</h3>
                      <p className="text-amber-100 text-xs">By {book.author}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-3 h-3 ${i < Math.floor(book.rating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-amber-800 text-xs font-medium">{book.rating}</span>
                    </div>
                    {book.rating > 4.4 && (
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded">Bestseller</span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">{book.title}</h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-grow">{book.description}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/book/${book.id}`}
                      className="bg-amber-600 hover:bg-amber-700 text-white text-xs px-3 py-1.5 rounded transition-colors duration-300"
                    >
                      Read Now
                    </Link>
                    <button className="group relative p-1.5 rounded-full hover:bg-amber-100 transition-colors duration-300">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      <span className="text-xs font-medium text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">+5 points</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {visibleBooks < collectionBooks.length && (
            <div className="mt-6 text-center col-span-full">
              <button 
                onClick={loadMoreBooks}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-amber-200"
              >
                View More Books
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;