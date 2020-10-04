import React, { useState } from 'react';
import logo from '../Header/OG-Spring.svg.png';
import lists from '../../ExpandListItems.json';
import './SideNav.scss';
import NavElement from '../NavElement/NavElement';
import MobileNavElement from '../MobileNavElement/MobileNavElement';

const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleClick = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
      <div className="navigation">
        <div className="container">
          <div>
            <img className="navLogo" alt="Spring" src={logo} />
          </div>
          <ul>
            {Object.keys(lists).map((name, index) => <NavElement key={name + index} name={name} />)}
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
      <div className={`sideNav ${showMobileNav ? 'showSideNav' : ''}`}>
        <div className="sideNavContainer">
          {Object.keys(lists)
            .map((name, index) => <MobileNavElement key={name + index} name={name} />)}
        </div>
      </div>
    </>
  );
};

export default Navigation;
