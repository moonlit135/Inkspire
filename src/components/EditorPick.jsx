import React from 'react';
import { Link } from 'react-router-dom';
import { editorsPicks } from '../data/BookData';

const EditorPick = () => {
  return (
    <div className="py-1 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="bg-amber-50 bg-opacity-70 rounded-xl shadow-lg p-6 border border-amber-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {editorsPicks.map((book) => (
            <div key={book.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Book Cover */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={book.coverImage} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm text-amber-300 mb-1">Featured</p>
                    <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                    <p className="text-amber-100 text-sm">By {book.author}</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center bg-amber-50 px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-amber-400' : 'text-gray-200'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-amber-800 text-xs font-medium">{book.rating}</span>
                    </div>
                  </div>
                  <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Most Liked</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{book.title}</h3>
                <p className="text-gray-500 text-sm mb-4">By {book.author}</p>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{book.description}</p>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/book/${book.id}`}
                    className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Read Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <button className="flex items-center text-gray-400 hover:text-amber-600 transition-colors duration-200 group">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-xs font-medium text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">+10 points</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPick;