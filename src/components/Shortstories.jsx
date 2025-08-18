import React from 'react';
import TopWeek from './TopWeek';
import RisingVoices from './RisingVoices';
import { topStories as ShortstoriesData, risingVoices, latestCollections, shortstoriesCollections} from "../data/ShortstoriesData";
import LatestCollections from './LatestCollections';
import CollectionExplorer from './CollectionExplorer';

// Debug: Log the imported data
console.log('=== TOP STORIES DATA IMPORT ===');
console.log('Imported data:', ShortstoriesData);
console.log('Is array:', Array.isArray(ShortstoriesData));
console.log('Item count:', Array.isArray(ShortstoriesData) ? ShortstoriesData.length : 'N/A');
console.log('============================');

const Shortstories = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-amber-100">
          
          {/* Top Week Section */}
          <div className="p-8">
            <TopWeek 
              items={ShortstoriesData} 
              title="Top Stories of the Week"
              description="Discover the most captivating short stories" 
              itemType="stories"
            />
          </div>
          
          {/* Rising Voices Section */}
          <div className="bg-amber-50 p-8 border-t border-amber-100">
            <RisingVoices 
              items={risingVoices}
              title="Rising Voices in Short Stories"
              subtitle="Discover fresh and exciting new voices in short fiction"
              theme="amber"
              badgeText="🌟 New Talent"
            />
            
            {/* Latest Collections Section */}
            <div className="mt-12">
              <LatestCollections 
                collections={latestCollections}
                title="Latest Story Collections"
                theme="amber"
                itemsPerPage={3}
              />
            </div>

            {/* Collection Explorer Section */}
            <div className="mt-16">
              <CollectionExplorer
                collections={shortstoriesCollections}
                title="Explore Short Story Collections"
                theme="amber"
                initialVisible={6}
                loadMoreCount={3}
                onItemClick={(item) => console.log('Collection selected:', item.title)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Shortstories;