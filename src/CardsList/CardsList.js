import React, { useState } from 'react';
import Card from '../Card/Card';
import './CardList.scss';
import '../CardsList/Search.scss';
import CardList from "../CardsInfo";

const CardsList = () => {
  const [cards, setCards] = useState(CardList.cards);

  const handleChange = (e) => {
    const inputText = e.currentTarget.value;
    setCards(CardList.cards.filter((card) => card.name.toLowerCase().includes(inputText.toLowerCase())));
    console.log(cards);
  };

  return (
    <>
      <div className="searchInput">
        <input placeholder='Search' onChange={handleChange} />
      </div>
      <div className="cardListContainer">
        {
          cards.length
            ? (
              <div className="cardList">
                {
                  cards.map((item, index) => <Card key={index} name={item.name} text={item.text} icon={item.icon} />)
                }
              </div>
            )
            : <div className="noResults">No Results</div>
        }
      </div>
    </>
  );
};

export default CardsList;
