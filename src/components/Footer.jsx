import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaPinterest, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#5d4037] text-white/90 pt-4 px-4 md:px-8 relative z-10">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full h-16 -mt-16 overflow-hidden z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full transform rotate-180">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity="1" 
            fill="#5d4037"
          ></path>
        </svg>
      </div>
      <div className="py-12 md:py-16">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Logo Section - Top in Mobile */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-white/95 border-4 border-[#e9c46a] flex items-center justify-center shadow-xl mb-6">
              <span className="text-[#5d4037] font-bold text-xl text-center px-4">
                Inkspire
              </span>
            </div>
            <p className="text-[#e9c46a] text-center text-lg font-medium italic mb-8">
              Where every tale finds its home
            </p>
          </div>

          {/* About Section - Below Logo in Mobile */}
          <div className="space-y-4">
            <h3 className="text-[#e9c46a] text-xl font-semibold uppercase tracking-wider text-center md:text-left">About Us</h3>
            <p className="text-white/80 leading-relaxed text-center md:text-left">
              InkSpire is a digital storytelling platform where everyone can read, write, 
              and share their stories. You can even listen to your favorite stories through our podcasts. 
              This platform is for all literary lovers who enjoy reading, writing, and sharing their 
              tales with the world.
            </p>
          </div>

          {/* Contact and Follow Sections - Side by Side in Mobile */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-[#e9c46a] text-xl font-semibold uppercase tracking-wider text-center md:text-left">Contact Us</h3>
              <div className="space-y-4">
                <p className="flex items-center justify-center text-center text-white/90">
                  <FaPhone className="text-[#e9c46a] mr-3 text-xl transform scale-x-[-1]" />
                  <span>0123 - 4567891</span>
                </p>
                <p className="flex items-center justify-center text-center text-white/90">
                  <FaEnvelope className="text-[#e9c46a] mr-3 text-xl" />
                  <span>info@inkspire.in</span>
                </p>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="space-y-4">
              <h3 className="text-[#e9c46a] text-xl font-semibold uppercase tracking-wider text-center md:text-left">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#e9c46a] hover:border-[#e9c46a]/50 hover:text-[#5d4037] transition-all duration-300"
                >
                  <FaInstagram size={18} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#e9c46a] hover:border-[#e9c46a]/50 hover:text-[#5d4037] transition-all duration-300"
                >
                  <FaFacebook size={18} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#e9c46a] hover:border-[#e9c46a]/50 hover:text-[#5d4037] transition-all duration-300"
                >
                  <FaYoutube size={18} />
                </a>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#e9c46a] hover:border-[#e9c46a]/50 hover:text-[#5d4037] transition-all duration-300"
                >
                  <FaPinterest size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright - Below Contact/Follow in Mobile */}
          <div className="pt-3 mt-3">
            <p className="text-white/70 text-sm text-center mb-4">
              2025 InkSpire, Inc. All rights reserved.
            </p>
            <div className="w-16 h-px bg-white/20 mx-auto my-4"></div>
          </div>

          {/* Legal Links - Single Line in Mobile */}
          <div className="pt-1">
            <div className="flex flex-wrap justify-center gap-2 text-xs text-white/70">
              <a href="/terms" className="hover:text-[#e9c46a] transition-colors">Terms</a>
              <span className="text-white/30">•</span>
              <a href="/privacy" className="hover:text-[#e9c46a] transition-colors">Privacy</a>
              <span className="text-white/30">•</span>
              <a href="/disclaimer" className="hover:text-[#e9c46a] transition-colors">Disclaimer</a>
              <span className="text-white/30">•</span>
              <a href="/payment-policy" className="hover:text-[#e9c46a] transition-colors">Payments</a>
              <span className="text-white/30">•</span>
              <a href="/copyright" className="hover:text-[#e9c46a] transition-colors">Copyright</a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12 relative z-10">
            {/* About Section */}
            <div className="space-y-6">
              <h3 className="text-[#e9c46a] text-xl font-semibold mb-6 uppercase tracking-wider">About Us</h3>
              <p className="text-white/80 leading-relaxed">
                InkSpire is a digital storytelling platform where everyone can read, write, 
                and share their stories. You can even listen to your favorite stories through our podcasts. 
                This platform is for all literary lovers who enjoy reading, writing, and sharing their 
                tales with the world.
              </p>
            </div>

            {/* Logo Section */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-white/95 border-4 border-[#e9c46a] flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 mb-6">
                <span className="text-[#5d4037] font-bold text-xl text-center px-4">
                  InkSpire
                </span>
              </div>
              <p className="text-[#e9c46a] text-center text-lg font-medium italic">
                Where every tale finds its home
              </p>
            </div>

            {/* Contact & Follow Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-[#e9c46a] text-xl font-semibold mb-6 uppercase tracking-wider">Contact Us</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-white/90">
                    <FaPhone className="text-[#e9c46a] mr-3 text-xl transform scale-x-[-1]" />
                    <span>0123 - 45671</span>
                  </p>
                  <p className="flex items-center text-white/90">
                    <FaEnvelope className="text-[#e9c46a] mr-3 text-xl" />
                    <span>info@inkspire.in</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[#e9c46a] text-xl font-semibold mb-4 uppercase tracking-wider">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#e9c46a] hover:border-[#e9c46a]/50 hover:text-[#5d4037] transition-all duration-300"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#e9c46a] hover:border-[#e9c46a]/50 hover:text-[#5d4037] transition-all duration-300"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#e9c46a] hover:border-[#e9c46a]/50 hover:text-[#5d4037] transition-all duration-300"
                  >
                    <FaYoutube size={18} />
                  </a>
                  <a 
                    href="https://pinterest.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#e9c46a] hover:border-[#e9c46a]/50 hover:text-[#5d4037] transition-all duration-300"
                  >
                    <FaPinterest size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright and Legal Links for Desktop */}
            <div className="col-span-full mt-3 pt-3">
              <div className="flex flex-col items-center">
                <p className="text-white/70 text-sm mb-4">
                  © 2025 Inkspire, Inc. All rights reserved.
                </p>
                <div className="w-16 h-px bg-white/20 my-4"></div>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70 mt-2">
                  <a href="/terms" className="hover:text-[#e9c46a] transition-colors">Terms & Conditions</a>
                  <span className="text-white/30">•</span>
                  <a href="/privacy" className="hover:text-[#e9c46a] transition-colors">Privacy Policy</a>
                  <span className="text-white/30">•</span>
                  <a href="/disclaimer" className="hover:text-[#e9c46a] transition-colors">Disclaimer</a>
                  <span className="text-white/30">•</span>
                  <a href="/payment-policy" className="hover:text-[#e9c46a] transition-colors">Payment Policy</a>
                  <span className="text-white/30">•</span>
                  <a href="/copyright" className="hover:text-[#e9c46a] transition-colors">Copyright</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;