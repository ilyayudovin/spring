import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Introduction from './components/Introduction/Introduction';
import CardsList from './components/CardsList/CardsList';
import AnchorsSection from './components/AnchorsSection/AnchorsSection';
import Footer from './components/Footer/Footer';
import Navigation from "./components/Navigation/Navigation";

const App = () => (
  <>
    <Navigation />
    <Introduction />
    <CardsList />
    <AnchorsSection />
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
