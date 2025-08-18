import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Ctalibrary from '../components/Ctalibrary';
import EditorPick from '../components/EditorPick';
import Collections from '../components/Collections';

const Library = () => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Header />
      <main className="relative">
      <div className="relative z-0">
        <Hero2 />
      </div> 
        <div className="bg-[#f5e9d9] py-6 rounded-lg mx-4 -mt-6 mb-2 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center font-bold text-amber-800 hover:bg-amber-100 font-serif italic">This Week's Highlights</h2>
          </div>
        </div>
        <EditorPick />
        <div className="bg-[#f5e9d9] py-16 my-12">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-amber-900">
              "A library is not a luxury but one of the necessities of life."
              <footer className="mt-4 text-lg text-amber-800 font-medium">
                — Henry Ward Beecher
              </footer>
            </blockquote>
          </div>
        </div>
        <Collections />
        <Ctalibrary />
      </main>
      <Footer />
    </div>
  );
};

export default Library;