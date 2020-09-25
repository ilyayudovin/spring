import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import CardList from '../CardsInfo.json';
import CardsContext from '../CardsContext/CardsContext';
import './Search.scss';

const Search = () => {

  const [cards, setCards] = useContext(CardsContext);

  const handleChange = (e) => {
    const inputText = e.currentTarget.value;
    setCards(CardList.cards.filter((card) => card.name.toLowerCase().includes(inputText.toLowerCase())));
  };

  return (
    <div className="searchInput">
      <TextField
        onChange={handleChange}
        placeholder="Search"
        style={{ width: '100%', maxWidth: 900 }}
      />
    </div>
  );
};

export default Search;
