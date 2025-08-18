import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImage = '/images/image1.jpg';

const Hero = () => {
  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = heroImage;
    
    // Add to preload links as well for better browser support
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImage;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <div 
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center bg-cover bg-center pb-20 mb-8"
      style={{ 
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <style jsx>{`
        .wave-margin {
          position: relative;
          overflow: hidden;
        }
        .wave-margin::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -15px;
          height: 15px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23ffffff'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%23ffffff'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23ffffff'/%3E%3C/svg%3E");
          background-size: 100% 100%;
          transform: rotate(180deg);
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 z-10 wave-margin"></div>
      
      {/* Hero content */}
      <div className="relative z-20 max-w-2xl text-center text-white mt-8 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Playfair_Display'] leading-tight">
          Spend your time Poetically
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-['Playfair_Display'] italic opacity-90">
          A place to read, write, and live in verses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center [&>*]:backdrop-blur-sm">
          <Link 
            to="/writer" 
            className="inline-block bg-white/5 border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm md:text-base hover:bg-white/10 hover:border-white/80 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Start Writing</span>
            <span className="absolute inset-0 bg-white/10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </Link>
          <Link 
            to="/library" 
            className="inline-block bg-white/5 border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm md:text-base hover:bg-white/10 hover:border-white/80 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Start Reading</span>
            <span className="absolute inset-0 bg-white/10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </Link>
          <Link 
            to="/echoes" 
            className="inline-block bg-white/5 border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm md:text-base hover:bg-white/10 hover:border-white/80 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Start Listening</span>
            <span className="absolute inset-0 bg-white/10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </Link>
        </div>
      </div>
      

    </div>
  );
};

export default Hero;
