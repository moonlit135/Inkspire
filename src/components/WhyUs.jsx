import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-100/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100/80 text-amber-800 text-sm font-medium mb-8"
          >
            <span className="mr-2">✨</span>
            Our Community
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <FaQuoteLeft className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl text-amber-200/70" />
            <blockquote className="text-3xl md:text-4xl font-['Playfair_Display'] font-medium text-amber-900 leading-tight mb-8">
              "More than a platform — we're a community. At Inkspire, writers and readers come together to inspire, challenge, and celebrate creativity."
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {['Writers', 'Readers', 'Creators', 'Dreamers'].map((item, index) => (
              <span 
                key={index}
                className="px-5 py-2 bg-white/80 backdrop-blur-sm border border-amber-100 rounded-full text-amber-800 text-sm font-medium shadow-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      
    </section>
  );
};

export default WhyUs;
