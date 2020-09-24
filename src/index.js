import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import CardsList from "./CardsList/CardsList";
import Search from "./Search/Search";
import CardList from './CardsInfo';


const App = () => {

  const [items, setItems] = useState(CardList.cards);

  console.log(items);

  return (
    <>
      <Header />
      <Introduction />
      <Search setItems={setItems} items={items}/>
      <CardsList items={items}/>
    </>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
