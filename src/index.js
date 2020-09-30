import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import CardsList from './components/CardsList/CardsList';

const App = () => {

  return (
    <>
      <Header />
      <Introduction />
      <CardsList />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
