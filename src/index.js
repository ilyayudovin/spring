import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import Header from './Header/Header';
import Introduction from './Introduction/Introduction';
import CardsList from './CardsList/CardsList';
import HeaderContext from './Contexts/HeaderContext';

const App = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <HeaderContext.Provider value={[showMobileNav, setShowMobileNav]}>
        <Header />
      </HeaderContext.Provider>
      <Introduction />
      <CardsList />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
