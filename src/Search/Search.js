import React from 'react';
import TextField from '@material-ui/core/TextField';
import CardList from '../CardsInfo.json';
import './Search.scss';

const Search = ({ setItems }) => {
  const handleChange = (e) => {
    const str = e.currentTarget.value;
    const items = CardList.cards.filter((item) => item.name.toLowerCase().includes(str.toLowerCase()));
    setItems(items);
  };

  return (
    <div className="searchInput">
      <TextField
        onChange={handleChange}
        placeholder="search"
        style={{ width: '100%', maxWidth: 900 }}
      />
    </div>
  );
};

export default Search;
