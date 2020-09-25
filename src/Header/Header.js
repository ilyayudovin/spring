import React, { useState } from 'react';
import './Header.scss';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import Navigation from '../Navigation/Navigation';

const Header = () => {

  return (
    <div className="header">
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default Header;
