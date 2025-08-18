import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero4 from '../components/Hero4';
import Poem from '../components/Poem';
import Shortstories from '../components/Shortstories';

const categories = ['Poems', 'Short Stories', 'Articles', 'Novels', 'Scripts', 'Journals'];

const Writer = () => {
  const [activeTab, setActiveTab] = useState('Poems');

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Header />
      <main className="flex-grow relative">
        <Hero4 />

        {/* Banner with Tab Bar */}
        <div className="max-w-7xl border-amber-200 mx-auto px-4 -mt-5 relative z-20">
          <div className="bg-amber-100 rounded-lg overflow-hidden relative z-10 border border-amber-200 shadow-md">
            {/* Tab Bar */}
            <div className="py-4">
              <div className="overflow-x-auto">
                <div className="flex justify-center gap-2 px-4">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveTab(category)}
                      className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                        activeTab === category
                          ? 'bg-white text-amber-900 shadow-md border-t-2 border-amber-400 transform -translate-y-0.5'
                          : 'text-amber-800 hover:bg-white/70 hover:shadow-sm'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tab Content Card */}
          <div className="max-w-4xl mx-auto -mt-6 relative z-0 px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100">
              <div className="text-center">
                {activeTab === 'Poems' && (
                  <p className="text-amber-900/90 text-xl font-medium tracking-wide leading-relaxed">
                    <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                      Where emotions flow in measured lines, and every word carries weight.
                    </span>
                  </p>
                )}
                {activeTab === 'Short Stories' && (
                  <p className="text-amber-900/90 text-xl font-medium tracking-wide leading-relaxed">
                    <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                      Bite-sized tales that leave a lasting impression.
                    </span>
                  </p>
                )}
                {activeTab === 'Articles' && (
                  <p className="text-amber-900/90 text-xl font-medium tracking-wide leading-relaxed">
                    <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                      Share your unique perspective with the world.
                    </span>
                  </p>
                )}
                {activeTab === 'Novels' && (
                  <p className="text-amber-900/90 text-xl font-medium tracking-wide leading-relaxed">
                    <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                      Where imagination knows no bounds.
                    </span>
                  </p>
                )}
                {activeTab === 'Scripts' && (
                  <p className="text-amber-900/90 text-xl font-medium tracking-wide leading-relaxed">
                    <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                      Bring characters to life through powerful dialogue.
                    </span>
                  </p>
                )}
                {activeTab === 'Journals' && (
                  <p className="text-amber-900/90 text-xl font-medium tracking-wide leading-relaxed">
                    <span className="bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
                      Your thoughts, your voice, your legacy.
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 py-8 bg-white/80 rounded-lg my-6 backdrop-blur-sm shadow-inner">
          {activeTab === 'Poems' && <Poem />}
          {activeTab === 'Short Stories' && <Shortstories />}
          {activeTab === 'Articles' && <div>Articles Content</div>}
          {activeTab === 'Novels' && <div>Novels Content</div>}
          {activeTab === 'Scripts' && <div>Scripts Content</div>}
          {activeTab === 'Journals' && <div>Journals Content</div>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Writer;
