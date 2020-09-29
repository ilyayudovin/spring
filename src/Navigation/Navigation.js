import React, { useContext } from 'react';
import logo from '../Header/OG-Spring.svg.png';
import lists from '../ExpandListItems.json';
import NavElement from '../NavElement/NavElement';
import HeaderContext from '../Contexts/HeaderContext';

const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useContext(HeaderContext);

  const handleClick = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className="navigation">
      <div className="container">
        <div>
          <img className="navLogo" alt="Spring" src={logo} />
        </div>
        <ul>
          {Object.keys(lists.list).map((name, index) => <NavElement key={lists.list[index]} name={name} />)}
        </ul>
        <div className="burgerIconContainer" onClick={handleClick} role="presentation">
          <div className={`burgerIcon ${showMobileNav ? 'hide' : ''}`}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
          <div className={`closeIcon change ${!showMobileNav ? 'hideCloseIcon' : ''}`}>
            <div className="bar1" />
            <div className="bar3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
