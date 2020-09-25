import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

const CardsList = ({ items }) => (
  <div className="cardListContainer">
    {
      items.length
        ? (
          <div className="cardList">
            {items.map((item) => <Card name={item.name} text={item.text} icon={item.icon} />)}</div>
        )
        : <div className="noResults">No Results</div>
    }
  </div>
);

export default CardsList;
