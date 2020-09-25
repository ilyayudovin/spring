import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Header from './Header/Header';
import Introduction from './Introduction/Introduction';
import CardsList from './CardsList/CardsList';
import Search from './Search/Search';
import CardList from './CardsInfo.json';
import CardsContext from './CardsContext/CardsContext';

const App = () => {
  const [cards, setCards] = useState(CardList.cards);

  return (
    <>
      <Header />
      <Introduction />
      <CardsContext.Provider value={ [cards, setCards] }>
        <Search />
        <CardsList />
      </CardsContext.Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
