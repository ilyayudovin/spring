import React, { useContext } from 'react';
import CardList from '../CardsInfo.json';
import CardsContext from '../Contexts/CardsContext';
import './Search.scss';

const Search = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useContext(CardsContext);

  const handleChange = (e) => {
    const inputText = e.currentTarget.value;
    setCards(CardList.cards.filter((card) => card.name.toLowerCase().includes(inputText.toLowerCase())));
  };

  return (
    <div className="searchInput">
      <input placeholder='Search' onChange={handleChange}/>
    </div>
  );
};

export default Search;
