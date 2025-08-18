import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';
import Teaser from '../components/Teaser';
import Challenge from '../components/Challenge';
import WhyUs from '../components/WhyUs';
import Subscription from '../components/Subscription';
const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const MainContent = styled.main`
  flex: 1;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <MainContent>
        <Hero />
        <Highlights />
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-transparent">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <blockquote className="text-2xl md:text-3xl font-serif italic text-amber-900">
                  "The first draft is just you telling yourself the story."
                  <footer className="mt-4 text-lg text-amber-800 font-medium">
                    — Terry Pratchett
                  </footer>
              </blockquote>
            </div>
          </div>
          <Teaser />
          <Challenge />
          <WhyUs />
          
          <div className="bg-[#f5e9d9] py-9 ">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-amber-900">
              "Write the kind of story you would like to read."
              <footer className="mt-4 text-lg text-amber-800 font-medium">
                — Toni Morrison
              </footer>
            </blockquote>
          </div>
        </div>
        </div>
      </MainContent>
      <Subscription className="relative z-10 -mt-16" />
      <Footer className="relative" />
    </HomeContainer>
  );
};

export default Home;