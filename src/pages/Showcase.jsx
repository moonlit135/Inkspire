import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero5 from '../components/Hero5';
import ChallengeCards from '../components/ChallengeCards';
import OngoingChallenge from '../components/OngoingChallenge';

const Showcase = () => {
  const ongoingRef = useRef(null);
  const challengesRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#f9e0a8] relative w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <Hero5 />
        </div>
        <div id="ongoing-challenge" ref={ongoingRef} className="w-full scroll-mt-20">
          <OngoingChallenge />
        </div>
        <div id="challenge-cards" ref={challengesRef} className="w-full scroll-mt-20">
          <ChallengeCards />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Showcase;