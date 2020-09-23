import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import CardsList from "./CardsList/CardsList";

const App = () => {
  return (
    <>
      <Header />
      <Introduction />
      <CardsList />
    </>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
