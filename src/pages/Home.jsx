import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';
import Teaser from '../components/Teaser';
import Challenge from '../components/Challenge';
import WhyUs from '../components/WhyUs';

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
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-transparent"></div>
          <Teaser />
          <Challenge />
          <WhyUs />
        </div>
      </MainContent>
      <Footer />
    </HomeContainer>
  );
};

export default Home;