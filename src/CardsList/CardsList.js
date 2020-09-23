import React from 'react';
import CardList from './../CardsInfo';
import Card from "./Card/Card";
import './../Styles/CardList.scss';


const CardsList = () => {

  return(
    <div className='cardListContainer'>
      <div className='cardList'>
        {CardList.cards.map( card => <Card name={card.name} text={card.text} icon={card.icon} />)}
      </div>
    </div>
  );
};

export default CardsList;
