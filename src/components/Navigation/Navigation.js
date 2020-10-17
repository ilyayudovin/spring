import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from './OG-Spring.svg.png';
import lists from '../../jsonInfo/ExpandListItems.json';
import './SideNav.scss';
import './Header.scss';
import NavElement from '../NavElement/NavElement';
import MobileNavElement from '../MobileNavElement/MobileNavElement';

const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    setShowMobileNav(!showMobileNav);
  };

  const logOut = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <div className="header">
      <div className="navigation">
        <div className="container">
          <div>
            <img className="navLogo" alt="Spring" src={logo} />
          </div>
          <ul>
            {Object.keys(lists).map((name) => <NavElement key={name} name={name} />)}
            <div className="logOut" onClick={logOut}>Log Out</div>
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
          <div className="logOutMobile" onClick={logOut}>Log Out</div>
          {Object.keys(lists)
            .map((name) => <MobileNavElement key={name} name={name} />)}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
