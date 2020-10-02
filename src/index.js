import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import CardsList from './components/CardsList/CardsList';
import AnchorsSection from './components/AnchorsSection/AnchorsSection';
import Footer from './components/Footer/Footer';

const App = () => (
  <>
    <Header />
    <Introduction />
    <CardsList />
    <AnchorsSection />
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
