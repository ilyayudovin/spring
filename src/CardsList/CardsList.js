import React, { useContext } from 'react';
import Card from '../Card/Card';
import './CardList.scss';
import CardsContext from '../Contexts/CardsContext';

const CardsList = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useContext(CardsContext);

  return (
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
  );
};

export default CardsList;
