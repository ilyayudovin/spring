import React from 'react';
import './Header.scss';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <div className="header">
    <MobileNavigation />
    <Navigation />
  </div>
);

export default Header;
