import React from 'react';
import Navigation from '../Navigation/Navigation';
import Introduction from '../Introduction/Introduction';
import CardsList from '../CardsList/CardsList';
import AnchorsSection from '../AnchorsSection/AnchorsSection';
import Footer from '../Footer/Footer';

const Home = () => (
  <>
    <Navigation />
    <Introduction />
    <CardsList />
    <AnchorsSection />
    <Footer />
  </>
);

export default Home;
