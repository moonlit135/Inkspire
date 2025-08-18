import React from 'react';
import { Link } from 'react-router-dom';

const CtaLibrary = () => {
  return (
    <div className="relative py-20 bg-amber-50 text-center overflow-hidden">
      {/* Elegant wavy line at the top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden transform rotate-180">
        <svg className="w-full h-14 text-amber-700/80" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34,0,0-38.02-15.88-126.08,15.28-47.79,17.23-95.32,25.5-142.83,22.29-54.28-3.7-105.5-26.49-157.35-48.66C327.8,7.51,276.2,1.67,224.58,3.4,99.93,7.27,17.87,53.34,0,120Z" 
            className="fill-current"
            opacity="0.6"
          ></path>
          <path 
            d="M1200,0V120H0V0c43.44,43.44,98.87,64.3,158.48,70.95,28.87,3.23,57.92-1.49,84.85-13.76,35.2-16.03,63.68-44.34,104.19-53.91C399.3,1.9,448.56,16.14,496,34.34,553.22,56.8,607.98,80.55,665.2,91.42c43.56,8.28,88.56,3.99,128.8-12.28,54.13-21.9,97.73-65.34,127.68-117.73C934.53,4.16,1068.27-9.14,1200,0Z" 
            className="fill-current"
            opacity="0.4"
          ></path>
          <path 
            d="M1200,0V96.2c-131.73-9.34-265.47,4.16-277.32,22.27C891.93,136.47,847.36,130.7,800,120c-98.72-22.44-192.5-64.9-288-87.63C369.8,12.6,294.15,4.37,224.58,3.4,99.93,7.27,17.87,53.34,0,120H1200Z" 
            className="fill-current"
            opacity="0.2"
          ></path>
        </svg>
      </div>
      
      {/* Decorative vintage elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiAgPHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1UzI1IDYzLjggMjUgNTBTMzYuMiAyNSA1MCAyNXoiIGZpbGw9IiNkOTYzMTMiIGZpbGwtb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPgo=')]"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="inline-block mb-6 px-4 py-1 bg-amber-100 border-l-4 border-amber-800 text-amber-800 text-sm font-mono tracking-widest">
          CALL TO ADVENTURE
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif font-normal text-amber-900 mb-6 leading-tight">
          <span className="relative inline-block">
            <span className="relative z-10">Add Your Voice to the Library</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200/70 -z-0"></span>
          </span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-amber-800/90 mb-10 font-serif italic leading-relaxed">
            "Your words can live here, waiting to be discovered by generations of readers.
            Every great story begins with a single word. Will yours be next?"
          </p>
        </div>
        
        <Link
          to="/publish"
          className="inline-flex items-center justify-center px-10 py-4 border-2 border-amber-800 text-base font-medium tracking-wider text-amber-800 bg-transparent hover:bg-amber-800 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800"
        >
          <span className="relative">
            Publish Your Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-800 group-hover:w-full transition-all duration-300"></span>
          </span>
        </Link>
        
        <div className="mt-12 text-xs text-amber-700/60 font-mono tracking-widest">
          WHERE STORIES FIND THEIR VOICE
        </div>
      </div>
    </div>
  );
};

export default CtaLibrary;