import React from "react";
import TopWeeknew from "./TopWeeknew";
import { topPoems as PoemData, risingVoices, latestCollections } from "../data/PoemData";
import RisingVoices from "./RisingVoices";
import LatestCollections from "./LatestCollections";
import CollectionExplorer from "./CollectionExplorer";

const Poem = () => {
  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-12 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-amber-100">
          
          {/* Top Week Section */}
          <div className="p-4 sm:p-6 md:p-8">
            <TopWeeknew 
              items={PoemData} 
              title="Top Poems of the Week"
              description="Celebrating the most heartfelt poetry" 
            />
          </div>
          
          {/* Other Sections */}
          <div className="bg-amber-50 p-2 sm:p-3 border-t border-amber-100">
            <div className="mt-6 sm:mt-8">
              <RisingVoices 
                items={risingVoices}
                title="Raising voices"
                subtitle="New writers gaining notice in our community"
                theme="amber"
                badgeText="✍️ New Voice"
              />
            </div>
            <div className="mt-8 sm:mt-10 md:mt-12">
              <LatestCollections 
                collections={latestCollections}
                title="Latest Poetry Collections"
                theme="amber"
                itemsPerPage={3}
              />
            </div>
            <div className="mt-8 sm:mt-10 md:mt-12 pb-4 sm:pb-6">
              <CollectionExplorer
                collections={latestCollections}
                title="Explore Poetry Collections"
                theme="amber"
                initialVisible={6}
                loadMoreCount={3}
                onItemClick={(item) => console.log('Poem collection selected:', item)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poem;
